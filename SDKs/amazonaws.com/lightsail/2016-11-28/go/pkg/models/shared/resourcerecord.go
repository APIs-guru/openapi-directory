package shared



type ResourceRecord struct {
    Name *string `json:"name,omitempty"`
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

