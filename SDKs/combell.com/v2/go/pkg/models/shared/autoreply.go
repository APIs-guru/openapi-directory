package shared



type AutoReply struct {
    Enabled *bool `json:"enabled,omitempty"`
    Message *string `json:"message,omitempty"`
    Subject *string `json:"subject,omitempty"`
    
}

