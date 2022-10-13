package shared

type ParallelismConfigurationDescription struct {
	AutoScalingEnabled *bool                  `json:"AutoScalingEnabled"`
	ConfigurationType  *ConfigurationTypeEnum `json:"ConfigurationType"`
	CurrentParallelism *int64                 `json:"CurrentParallelism"`
	Parallelism        *int64                 `json:"Parallelism"`
	ParallelismPerKpu  *int64                 `json:"ParallelismPerKPU"`
}
