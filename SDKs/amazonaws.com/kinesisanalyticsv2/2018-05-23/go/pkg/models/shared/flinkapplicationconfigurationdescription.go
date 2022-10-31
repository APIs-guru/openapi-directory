package shared



type FlinkApplicationConfigurationDescription struct {
    CheckpointConfigurationDescription *CheckpointConfigurationDescription `json:"CheckpointConfigurationDescription,omitempty"`
    JobPlanDescription *string `json:"JobPlanDescription,omitempty"`
    MonitoringConfigurationDescription *MonitoringConfigurationDescription `json:"MonitoringConfigurationDescription,omitempty"`
    ParallelismConfigurationDescription *ParallelismConfigurationDescription `json:"ParallelismConfigurationDescription,omitempty"`
    
}

