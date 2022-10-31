package shared



type StartSessionResponse struct {
    SessionID *string `json:"SessionId,omitempty"`
    StreamURL *string `json:"StreamUrl,omitempty"`
    TokenValue *string `json:"TokenValue,omitempty"`
    
}

