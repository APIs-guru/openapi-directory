package shared

// CheckpointConfigurationUpdate
// Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.
type CheckpointConfigurationUpdate struct {
	CheckpointIntervalUpdate         *int64                 `json:"CheckpointIntervalUpdate,omitempty"`
	CheckpointingEnabledUpdate       *bool                  `json:"CheckpointingEnabledUpdate,omitempty"`
	ConfigurationTypeUpdate          *ConfigurationTypeEnum `json:"ConfigurationTypeUpdate,omitempty"`
	MinPauseBetweenCheckpointsUpdate *int64                 `json:"MinPauseBetweenCheckpointsUpdate,omitempty"`
}
