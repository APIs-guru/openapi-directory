package shared

// CampaignLimits
// For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.
type CampaignLimits struct {
	Daily             *int64 `json:"Daily,omitempty"`
	MaximumDuration   *int64 `json:"MaximumDuration,omitempty"`
	MessagesPerSecond *int64 `json:"MessagesPerSecond,omitempty"`
	Session           *int64 `json:"Session,omitempty"`
	Total             *int64 `json:"Total,omitempty"`
}
