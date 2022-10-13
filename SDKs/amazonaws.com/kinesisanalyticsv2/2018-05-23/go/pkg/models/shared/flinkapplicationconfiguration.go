package shared

type FlinkApplicationConfiguration struct {
	CheckpointConfiguration  *CheckpointConfiguration  `json:"CheckpointConfiguration"`
	MonitoringConfiguration  *MonitoringConfiguration  `json:"MonitoringConfiguration"`
	ParallelismConfiguration *ParallelismConfiguration `json:"ParallelismConfiguration"`
}
