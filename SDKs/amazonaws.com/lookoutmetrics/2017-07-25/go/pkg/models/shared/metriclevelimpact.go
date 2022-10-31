package shared

type MetricLevelImpact struct {
	ContributionMatrix *ContributionMatrix `json:"ContributionMatrix,omitempty"`
	MetricName         *string             `json:"MetricName,omitempty"`
	NumTimeSeries      *int64              `json:"NumTimeSeries,omitempty"`
}
