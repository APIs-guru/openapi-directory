package shared

// CustomMetric
// Allows autoscaling based on Stackdriver metrics.
type CustomMetric struct {
	Filter                   *string  `json:"filter,omitempty"`
	MetricName               *string  `json:"metricName,omitempty"`
	SingleInstanceAssignment *float64 `json:"singleInstanceAssignment,omitempty"`
	TargetType               *string  `json:"targetType,omitempty"`
	TargetUtilization        *float64 `json:"targetUtilization,omitempty"`
}
