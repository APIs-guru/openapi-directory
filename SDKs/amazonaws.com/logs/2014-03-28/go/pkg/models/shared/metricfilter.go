package shared

// MetricFilter
// Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
type MetricFilter struct {
	CreationTime          *int64                 `json:"creationTime,omitempty"`
	FilterName            *string                `json:"filterName,omitempty"`
	FilterPattern         *string                `json:"filterPattern,omitempty"`
	LogGroupName          *string                `json:"logGroupName,omitempty"`
	MetricTransformations []MetricTransformation `json:"metricTransformations,omitempty"`
}
