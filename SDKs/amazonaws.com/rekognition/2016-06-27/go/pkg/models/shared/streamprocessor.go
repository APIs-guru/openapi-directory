package shared



type StreamProcessor struct {
    Name *string `json:"Name,omitempty"`
    Status *StreamProcessorStatusEnum `json:"Status,omitempty"`
    
}

