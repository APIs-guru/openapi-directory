package shared

type ItemizedMetricStats struct {
	MetricName      *string `json:"MetricName,omitempty"`
	OccurrenceCount *int64  `json:"OccurrenceCount,omitempty"`
}
