package shared

type AutoScalingThresholds struct {
	Alarms             []string `json:"Alarms,omitempty"`
	CPUThreshold       *float64 `json:"CpuThreshold,omitempty"`
	IgnoreMetricsTime  *int64   `json:"IgnoreMetricsTime,omitempty"`
	InstanceCount      *int64   `json:"InstanceCount,omitempty"`
	LoadThreshold      *float64 `json:"LoadThreshold,omitempty"`
	MemoryThreshold    *float64 `json:"MemoryThreshold,omitempty"`
	ThresholdsWaitTime *int64   `json:"ThresholdsWaitTime,omitempty"`
}
