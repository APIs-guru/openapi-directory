package shared



type DefaultIntegerHyperParameterRange struct {
    IsTunable *bool `json:"isTunable,omitempty"`
    MaxValue *int64 `json:"maxValue,omitempty"`
    MinValue *int64 `json:"minValue,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

