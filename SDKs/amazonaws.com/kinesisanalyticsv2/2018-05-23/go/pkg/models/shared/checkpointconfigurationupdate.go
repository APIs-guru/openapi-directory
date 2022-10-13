package shared

type CheckpointConfigurationUpdate struct {
	CheckpointIntervalUpdate         *int64                 `json:"CheckpointIntervalUpdate"`
	CheckpointingEnabledUpdate       *bool                  `json:"CheckpointingEnabledUpdate"`
	ConfigurationTypeUpdate          *ConfigurationTypeEnum `json:"ConfigurationTypeUpdate"`
	MinPauseBetweenCheckpointsUpdate *int64                 `json:"MinPauseBetweenCheckpointsUpdate"`
}
