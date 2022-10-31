package shared



type ResumeSessionResponse struct {
    SessionID *string `json:"SessionId,omitempty"`
    StreamURL *string `json:"StreamUrl,omitempty"`
    TokenValue *string `json:"TokenValue,omitempty"`
    
}

