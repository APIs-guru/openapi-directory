package shared



type DataQualityBaselineConfig struct {
    BaseliningJobName *string `json:"BaseliningJobName,omitempty"`
    ConstraintsResource *MonitoringConstraintsResource `json:"ConstraintsResource,omitempty"`
    StatisticsResource *MonitoringStatisticsResource `json:"StatisticsResource,omitempty"`
    
}

