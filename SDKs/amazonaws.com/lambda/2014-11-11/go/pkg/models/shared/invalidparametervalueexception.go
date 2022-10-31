package shared



type InvalidParameterValueException struct {
    Type *string `json:"Type,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

