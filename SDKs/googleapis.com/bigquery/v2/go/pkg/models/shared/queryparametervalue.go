package shared



type QueryParameterValue struct {
    ArrayValues []QueryParameterValue `json:"arrayValues,omitempty"`
    StructValues map[string]QueryParameterValue `json:"structValues,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

