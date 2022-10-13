package shared

type FlinkApplicationConfigurationUpdate struct {
	CheckpointConfigurationUpdate  *CheckpointConfigurationUpdate  `json:"CheckpointConfigurationUpdate"`
	MonitoringConfigurationUpdate  *MonitoringConfigurationUpdate  `json:"MonitoringConfigurationUpdate"`
	ParallelismConfigurationUpdate *ParallelismConfigurationUpdate `json:"ParallelismConfigurationUpdate"`
}
