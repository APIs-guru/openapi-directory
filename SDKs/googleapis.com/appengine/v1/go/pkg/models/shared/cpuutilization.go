package shared

type CPUUtilization struct {
	AggregationWindowLength *string  `json:"aggregationWindowLength"`
	TargetUtilization       *float64 `json:"targetUtilization"`
}
