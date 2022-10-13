package shared

type AutoScalingThresholds struct {
	Alarms             []string `json:"Alarms"`
	CPUThreshold       *float64 `json:"CpuThreshold"`
	IgnoreMetricsTime  *int64   `json:"IgnoreMetricsTime"`
	InstanceCount      *int64   `json:"InstanceCount"`
	LoadThreshold      *float64 `json:"LoadThreshold"`
	MemoryThreshold    *float64 `json:"MemoryThreshold"`
	ThresholdsWaitTime *int64   `json:"ThresholdsWaitTime"`
}
