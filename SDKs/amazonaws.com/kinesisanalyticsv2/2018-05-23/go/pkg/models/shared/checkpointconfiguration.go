package shared

type CheckpointConfiguration struct {
	CheckpointInterval         *int64                `json:"CheckpointInterval,omitempty"`
	CheckpointingEnabled       *bool                 `json:"CheckpointingEnabled,omitempty"`
	ConfigurationType          ConfigurationTypeEnum `json:"ConfigurationType"`
	MinPauseBetweenCheckpoints *int64                `json:"MinPauseBetweenCheckpoints,omitempty"`
}
