package shared



type ShareError struct {
    Accounts []string `json:"Accounts,omitempty"`
    Error *string `json:"Error,omitempty"`
    Message *string `json:"Message,omitempty"`
    
}

