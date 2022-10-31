package shared



type DefaultCategoricalHyperParameterRange struct {
    IsTunable *bool `json:"isTunable,omitempty"`
    Name *string `json:"name,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

