package shared



type Value struct {
    InterpretedValue string `json:"interpretedValue"`
    OriginalValue *string `json:"originalValue,omitempty"`
    ResolvedValues []string `json:"resolvedValues,omitempty"`
    
}

