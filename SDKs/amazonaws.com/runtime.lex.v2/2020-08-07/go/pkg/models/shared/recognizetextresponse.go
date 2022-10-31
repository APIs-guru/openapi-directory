package shared



type RecognizeTextResponse struct {
    Interpretations []Interpretation `json:"interpretations,omitempty"`
    Messages []Message `json:"messages,omitempty"`
    RequestAttributes map[string]string `json:"requestAttributes,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    SessionState *SessionState `json:"sessionState,omitempty"`
    
}

