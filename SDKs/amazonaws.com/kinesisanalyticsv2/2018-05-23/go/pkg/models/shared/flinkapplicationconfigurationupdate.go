package shared

// FlinkApplicationConfigurationUpdate
// Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.
type FlinkApplicationConfigurationUpdate struct {
	CheckpointConfigurationUpdate  *CheckpointConfigurationUpdate  `json:"CheckpointConfigurationUpdate,omitempty"`
	MonitoringConfigurationUpdate  *MonitoringConfigurationUpdate  `json:"MonitoringConfigurationUpdate,omitempty"`
	ParallelismConfigurationUpdate *ParallelismConfigurationUpdate `json:"ParallelismConfigurationUpdate,omitempty"`
}
