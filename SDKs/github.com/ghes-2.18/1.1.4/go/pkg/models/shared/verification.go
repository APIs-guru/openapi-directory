package shared



type Verification struct {
    Payload string `json:"payload"`
    Reason string `json:"reason"`
    Signature string `json:"signature"`
    Verified bool `json:"verified"`
    
}

