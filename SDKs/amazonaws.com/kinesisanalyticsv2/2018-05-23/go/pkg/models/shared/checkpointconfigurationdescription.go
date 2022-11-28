package shared

// CheckpointConfigurationDescription
// Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.
type CheckpointConfigurationDescription struct {
	CheckpointInterval         *int64                 `json:"CheckpointInterval,omitempty"`
	CheckpointingEnabled       *bool                  `json:"CheckpointingEnabled,omitempty"`
	ConfigurationType          *ConfigurationTypeEnum `json:"ConfigurationType,omitempty"`
	MinPauseBetweenCheckpoints *int64                 `json:"MinPauseBetweenCheckpoints,omitempty"`
}
