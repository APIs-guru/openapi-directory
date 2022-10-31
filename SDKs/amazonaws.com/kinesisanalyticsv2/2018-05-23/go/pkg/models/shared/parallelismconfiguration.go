package shared



type ParallelismConfiguration struct {
    AutoScalingEnabled *bool `json:"AutoScalingEnabled,omitempty"`
    ConfigurationType ConfigurationTypeEnum `json:"ConfigurationType"`
    Parallelism *int64 `json:"Parallelism,omitempty"`
    ParallelismPerKpu *int64 `json:"ParallelismPerKPU,omitempty"`
    
}

