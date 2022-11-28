package shared

// CPUUtilization
// Target scaling by CPU usage.
type CPUUtilization struct {
	AggregationWindowLength *string  `json:"aggregationWindowLength,omitempty"`
	TargetUtilization       *float64 `json:"targetUtilization,omitempty"`
}
