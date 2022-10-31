package shared



type StandardSchedulerSettings struct {
    MaxInstances *int32 `json:"maxInstances,omitempty"`
    MinInstances *int32 `json:"minInstances,omitempty"`
    TargetCPUUtilization *float64 `json:"targetCpuUtilization,omitempty"`
    TargetThroughputUtilization *float64 `json:"targetThroughputUtilization,omitempty"`
    
}

