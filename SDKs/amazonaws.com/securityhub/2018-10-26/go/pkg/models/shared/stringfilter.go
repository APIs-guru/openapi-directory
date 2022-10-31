package shared



type StringFilter struct {
    Comparison *StringFilterComparisonEnum `json:"Comparison,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

