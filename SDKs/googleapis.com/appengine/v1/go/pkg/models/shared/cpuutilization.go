package shared



type CPUUtilization struct {
    AggregationWindowLength *string `json:"aggregationWindowLength,omitempty"`
    TargetUtilization *float64 `json:"targetUtilization,omitempty"`
    
}

