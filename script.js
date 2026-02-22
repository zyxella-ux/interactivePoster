const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  //==============================================================
  //❓Create a new speech recognition
  //==============================================================
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";          // Set language to English
    recognition.continuous = true;       // Keep listening until stopped
    recognition.interimResults = true;   // Show partial results while speaking

  //==============================================================
  //❓Start recognition when "#startBtn" button is clicked
  //==============================================================
    document.querySelector("#startBtn").addEventListener("click", () => {
      recognition.start(); // Start listening
      document.querySelector("#startBtn").style.display = "none"; // Hide button after click
    });

  //==============================================================
  //✅ Define keywords and what happens when they are spoken
  //==============================================================
    const keywords = {
      "name": ()=>{
        document.querySelector("#mainText").className= "variable1";
        document.querySelector("#secondText").textContent = "Tiri Kananuruk";
        document.querySelector("#secondText").style.color = "#0c4f3b";
        document.body.style.backgroundImage= "url(./img/tiriKananuruk.png)"; 
      },
      "Performance Artist": ()=>{
        document.querySelector("#mainText").className= "variable2";
        document.querySelector("#secondText").textContent = "";                        
        document.body.style.backgroundImage= "url(./img/educator.png)";      
      },
      "Creative Coder": () => {
        document.querySelector("#mainText").className = "variable4";     
        document.body.style.backgroundImage= "url(./img/creativeCoder.png)";      
      },
      "Educator": () => {
        document.querySelector("#mainText").className = "variable3";     
        document.body.style.backgroundImage= "url(./img/lecture.png)";      
      },
      "Time": ()=>{
        document.querySelector("#mainText").className = "variable5";
        document.querySelector("#secondText").style.color = "#000000";
        document.querySelector("#secondText").textContent = "Feb 27, 4:30 PM";
        document.body.style.backgroundImage= "url(./img/door.jpg)";      
      },
      "Place": ()=>{
        document.querySelector("#mainText").className = "variable6";     
        document.querySelector("#secondText").textContent ="808 Commonwealth Ave Room 410 or on Zoom";
        document.querySelector("#secondText").style.fontSize ="50px";                     
        document.querySelector("#thirdText").textContent ="Boston University Graphic Design";
        document.querySelector("#thirdText").style.fontSize ="50px";
        document.body.style.backgroundImage= "url(./img/studio.jpg)";      
      },
      "Our Website": ()=>{
        document.querySelector("#mainText").className= "variable5";
        document.querySelector("#secondText").textContent ="https://xxx.tiri.xxx";       
        document.querySelector("#thirdText").textContent ="https://morakana.com";
        document.body.style.backgroundImage= "url(./img/frontstudio.jpg)";      
      }      
    };

  //==============================================================
  //❓Process recognized speech results
  //==============================================================
    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      document.querySelector("#mainText").textContent = transcript; // Show what user said
      const lowerTranscript = transcript.toLowerCase();
      for (const key in keywords) { 
        if (lowerTranscript.includes(key.toLowerCase())) { // Check if keyword is spoken
          document.querySelector("#mainText").textContent = key; // Display the keyword
          keywords[key](); // Run the keyword action
          break; // Stop checking after first match
        }
      }
    };

  //==============================================================
  //❓Restart recognition automatically when it ends
  //==============================================================
    recognition.onend = () => {
      recognition.start();
    };

  //==============================================================
}
