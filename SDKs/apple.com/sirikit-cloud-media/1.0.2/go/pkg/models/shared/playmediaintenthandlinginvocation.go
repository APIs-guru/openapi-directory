package shared



type PlayMediaIntentHandlingInvocation struct {
    Method string `json:"method"`
    Params map[string]interface{} `json:"params"`
    Session *Session `json:"session,omitempty"`
    
}

