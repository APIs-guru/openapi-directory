package shared



type WaitTime struct {
    WaitFor *string `json:"WaitFor,omitempty"`
    WaitUntil *string `json:"WaitUntil,omitempty"`
    
}

