package shared

type FlinkApplicationConfiguration struct {
	CheckpointConfiguration  *CheckpointConfiguration  `json:"CheckpointConfiguration,omitempty"`
	MonitoringConfiguration  *MonitoringConfiguration  `json:"MonitoringConfiguration,omitempty"`
	ParallelismConfiguration *ParallelismConfiguration `json:"ParallelismConfiguration,omitempty"`
}
