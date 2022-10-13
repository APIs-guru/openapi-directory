package shared

type FlinkApplicationConfigurationDescription struct {
	CheckpointConfigurationDescription  *CheckpointConfigurationDescription  `json:"CheckpointConfigurationDescription"`
	JobPlanDescription                  *string                              `json:"JobPlanDescription"`
	MonitoringConfigurationDescription  *MonitoringConfigurationDescription  `json:"MonitoringConfigurationDescription"`
	ParallelismConfigurationDescription *ParallelismConfigurationDescription `json:"ParallelismConfigurationDescription"`
}
