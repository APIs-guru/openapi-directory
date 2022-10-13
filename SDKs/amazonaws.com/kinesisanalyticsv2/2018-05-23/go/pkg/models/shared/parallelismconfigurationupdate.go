package shared

type ParallelismConfigurationUpdate struct {
	AutoScalingEnabledUpdate *bool                  `json:"AutoScalingEnabledUpdate"`
	ConfigurationTypeUpdate  *ConfigurationTypeEnum `json:"ConfigurationTypeUpdate"`
	ParallelismPerKpuUpdate  *int64                 `json:"ParallelismPerKPUUpdate"`
	ParallelismUpdate        *int64                 `json:"ParallelismUpdate"`
}
