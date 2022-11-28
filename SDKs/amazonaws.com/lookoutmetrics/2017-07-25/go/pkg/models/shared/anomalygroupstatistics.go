package shared

// AnomalyGroupStatistics
// Aggregated statistics for a group of anomalous metrics.
type AnomalyGroupStatistics struct {
	EvaluationStartDate     *string               `json:"EvaluationStartDate,omitempty"`
	ItemizedMetricStatsList []ItemizedMetricStats `json:"ItemizedMetricStatsList,omitempty"`
	TotalCount              *int64                `json:"TotalCount,omitempty"`
}
