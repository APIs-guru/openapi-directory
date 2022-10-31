package shared

type FlinkApplicationConfigurationUpdate struct {
	CheckpointConfigurationUpdate  *CheckpointConfigurationUpdate  `json:"CheckpointConfigurationUpdate,omitempty"`
	MonitoringConfigurationUpdate  *MonitoringConfigurationUpdate  `json:"MonitoringConfigurationUpdate,omitempty"`
	ParallelismConfigurationUpdate *ParallelismConfigurationUpdate `json:"ParallelismConfigurationUpdate,omitempty"`
}
