package shared

type CheckpointConfigurationDescription struct {
	CheckpointInterval         *int64                 `json:"CheckpointInterval"`
	CheckpointingEnabled       *bool                  `json:"CheckpointingEnabled"`
	ConfigurationType          *ConfigurationTypeEnum `json:"ConfigurationType"`
	MinPauseBetweenCheckpoints *int64                 `json:"MinPauseBetweenCheckpoints"`
}
