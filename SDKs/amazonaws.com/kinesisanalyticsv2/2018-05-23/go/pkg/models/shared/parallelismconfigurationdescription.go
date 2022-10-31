package shared

type ParallelismConfigurationDescription struct {
	AutoScalingEnabled *bool                  `json:"AutoScalingEnabled,omitempty"`
	ConfigurationType  *ConfigurationTypeEnum `json:"ConfigurationType,omitempty"`
	CurrentParallelism *int64                 `json:"CurrentParallelism,omitempty"`
	Parallelism        *int64                 `json:"Parallelism,omitempty"`
	ParallelismPerKpu  *int64                 `json:"ParallelismPerKPU,omitempty"`
}
