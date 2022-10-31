package shared



type TableMember struct {
    Name *string `json:"name,omitempty"`
    Schema *string `json:"schema,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

