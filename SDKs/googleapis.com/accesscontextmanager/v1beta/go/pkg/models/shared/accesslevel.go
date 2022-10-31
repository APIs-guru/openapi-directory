package shared



type AccessLevel struct {
    Basic *BasicLevel `json:"basic,omitempty"`
    Custom *CustomLevel `json:"custom,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

