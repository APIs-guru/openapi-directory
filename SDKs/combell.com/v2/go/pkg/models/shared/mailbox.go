package shared



type Mailbox struct {
    ActualSize *int32 `json:"actual_size,omitempty"`
    MaxSize *int32 `json:"max_size,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

