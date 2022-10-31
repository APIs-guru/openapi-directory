package shared



type GetSessionResponse struct {
    Interpretations []Interpretation `json:"interpretations,omitempty"`
    Messages []Message `json:"messages,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    SessionState *SessionState `json:"sessionState,omitempty"`
    
}

