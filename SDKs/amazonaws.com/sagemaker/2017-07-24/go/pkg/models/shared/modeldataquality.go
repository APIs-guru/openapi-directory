package shared



type ModelDataQuality struct {
    Constraints *MetricsSource `json:"Constraints,omitempty"`
    Statistics *MetricsSource `json:"Statistics,omitempty"`
    
}

