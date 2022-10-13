package shared

type CustomMetric struct {
	Filter                   *string  `json:"filter"`
	MetricName               *string  `json:"metricName"`
	SingleInstanceAssignment *float64 `json:"singleInstanceAssignment"`
	TargetType               *string  `json:"targetType"`
	TargetUtilization        *float64 `json:"targetUtilization"`
}
