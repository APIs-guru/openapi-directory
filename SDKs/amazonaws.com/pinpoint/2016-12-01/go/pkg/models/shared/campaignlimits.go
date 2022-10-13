package shared

type CampaignLimits struct {
	Daily             *int64 `json:"Daily"`
	MaximumDuration   *int64 `json:"MaximumDuration"`
	MessagesPerSecond *int64 `json:"MessagesPerSecond"`
	Session           *int64 `json:"Session"`
	Total             *int64 `json:"Total"`
}
