package shared



type InvalidRequestContentException struct {
    Type *string `json:"Type,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

