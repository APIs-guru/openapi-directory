package shared



type ServiceException struct {
    Message *string `json:"Message,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

