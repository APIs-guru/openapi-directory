package shared



type AccountUsage struct {
    FunctionCount *int64 `json:"FunctionCount,omitempty"`
    TotalCodeSize *int64 `json:"TotalCodeSize,omitempty"`
    
}

