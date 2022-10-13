package shared

type ItemizedMetricStats struct {
	MetricName      *string `json:"MetricName"`
	OccurrenceCount *int64  `json:"OccurrenceCount"`
}
