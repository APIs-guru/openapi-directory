package shared

type CheckpointConfigurationDescription struct {
	CheckpointInterval         *int64                 `json:"CheckpointInterval,omitempty"`
	CheckpointingEnabled       *bool                  `json:"CheckpointingEnabled,omitempty"`
	ConfigurationType          *ConfigurationTypeEnum `json:"ConfigurationType,omitempty"`
	MinPauseBetweenCheckpoints *int64                 `json:"MinPauseBetweenCheckpoints,omitempty"`
}
