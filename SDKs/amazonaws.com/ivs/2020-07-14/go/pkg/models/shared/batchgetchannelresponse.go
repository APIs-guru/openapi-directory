package shared



type BatchGetChannelResponse struct {
    Channels []Channel `json:"channels,omitempty"`
    Errors []BatchError `json:"errors,omitempty"`
    
}

