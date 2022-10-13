package shared

type StandardSchedulerSettings struct {
	MaxInstances                *int32   `json:"maxInstances"`
	MinInstances                *int32   `json:"minInstances"`
	TargetCPUUtilization        *float64 `json:"targetCpuUtilization"`
	TargetThroughputUtilization *float64 `json:"targetThroughputUtilization"`
}
