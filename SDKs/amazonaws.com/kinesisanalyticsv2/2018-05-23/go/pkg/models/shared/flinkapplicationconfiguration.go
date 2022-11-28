package shared

// FlinkApplicationConfiguration
// Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
type FlinkApplicationConfiguration struct {
	CheckpointConfiguration  *CheckpointConfiguration  `json:"CheckpointConfiguration,omitempty"`
	MonitoringConfiguration  *MonitoringConfiguration  `json:"MonitoringConfiguration,omitempty"`
	ParallelismConfiguration *ParallelismConfiguration `json:"ParallelismConfiguration,omitempty"`
}
