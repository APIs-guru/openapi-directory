package shared

// ItemizedMetricStats
// Aggregated statistics about a measure affected by an anomaly.
type ItemizedMetricStats struct {
	MetricName      *string `json:"MetricName,omitempty"`
	OccurrenceCount *int64  `json:"OccurrenceCount,omitempty"`
}
