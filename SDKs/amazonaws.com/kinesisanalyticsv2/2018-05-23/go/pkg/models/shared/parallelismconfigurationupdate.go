package shared

type ParallelismConfigurationUpdate struct {
	AutoScalingEnabledUpdate *bool                  `json:"AutoScalingEnabledUpdate,omitempty"`
	ConfigurationTypeUpdate  *ConfigurationTypeEnum `json:"ConfigurationTypeUpdate,omitempty"`
	ParallelismPerKpuUpdate  *int64                 `json:"ParallelismPerKPUUpdate,omitempty"`
	ParallelismUpdate        *int64                 `json:"ParallelismUpdate,omitempty"`
}
