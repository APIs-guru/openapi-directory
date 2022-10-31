package shared



type StandardSQLField struct {
    Name *string `json:"name,omitempty"`
    Type *StandardSQLDataType `json:"type,omitempty"`
    
}

