package shared

type ParallelismConfiguration struct {
	AutoScalingEnabled *bool                 `json:"AutoScalingEnabled"`
	ConfigurationType  ConfigurationTypeEnum `json:"ConfigurationType"`
	Parallelism        *int64                `json:"Parallelism"`
	ParallelismPerKpu  *int64                `json:"ParallelismPerKPU"`
}
