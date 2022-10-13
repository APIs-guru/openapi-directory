package shared

type MetricLevelImpact struct {
	ContributionMatrix *ContributionMatrix `json:"ContributionMatrix"`
	MetricName         *string             `json:"MetricName"`
	NumTimeSeries      *int64              `json:"NumTimeSeries"`
}
