package shared



type ModelBiasBaselineConfig struct {
    BaseliningJobName *string `json:"BaseliningJobName,omitempty"`
    ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource,omitempty"`
    
}

