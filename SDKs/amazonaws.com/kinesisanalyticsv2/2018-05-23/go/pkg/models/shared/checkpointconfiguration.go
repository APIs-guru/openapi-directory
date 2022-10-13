package shared

type CheckpointConfiguration struct {
	CheckpointInterval         *int64                `json:"CheckpointInterval"`
	CheckpointingEnabled       *bool                 `json:"CheckpointingEnabled"`
	ConfigurationType          ConfigurationTypeEnum `json:"ConfigurationType"`
	MinPauseBetweenCheckpoints *int64                `json:"MinPauseBetweenCheckpoints"`
}
