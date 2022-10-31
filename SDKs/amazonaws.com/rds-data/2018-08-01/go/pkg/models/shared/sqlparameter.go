package shared



type SQLParameter struct {
    Name *string `json:"name,omitempty"`
    TypeHint *TypeHintEnum `json:"typeHint,omitempty"`
    Value *Field `json:"value,omitempty"`
    
}

