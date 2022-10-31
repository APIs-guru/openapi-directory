package shared



type ModelExplainabilityBaselineConfig struct {
    BaseliningJobName *string `json:"BaseliningJobName,omitempty"`
    ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource,omitempty"`
    
}

