package shared

// ParallelismConfigurationDescription
// Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
type ParallelismConfigurationDescription struct {
	AutoScalingEnabled *bool                  `json:"AutoScalingEnabled,omitempty"`
	ConfigurationType  *ConfigurationTypeEnum `json:"ConfigurationType,omitempty"`
	CurrentParallelism *int64                 `json:"CurrentParallelism,omitempty"`
	Parallelism        *int64                 `json:"Parallelism,omitempty"`
	ParallelismPerKpu  *int64                 `json:"ParallelismPerKPU,omitempty"`
}
