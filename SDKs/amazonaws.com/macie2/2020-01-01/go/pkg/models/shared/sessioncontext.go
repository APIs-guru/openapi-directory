package shared



type SessionContext struct {
    Attributes *SessionContextAttributes `json:"attributes,omitempty"`
    SessionIssuer *SessionIssuer `json:"sessionIssuer,omitempty"`
    
}

