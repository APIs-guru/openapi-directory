package shared

// MetricLevelImpact
// Details about a measure affected by an anomaly.
type MetricLevelImpact struct {
	ContributionMatrix *ContributionMatrix `json:"ContributionMatrix,omitempty"`
	MetricName         *string             `json:"MetricName,omitempty"`
	NumTimeSeries      *int64              `json:"NumTimeSeries,omitempty"`
}
