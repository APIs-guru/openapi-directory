package shared



type HpoObjective struct {
    MetricName *string `json:"metricName,omitempty"`
    MetricRegex *string `json:"metricRegex,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

