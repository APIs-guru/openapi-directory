package shared

// CampaignEventFilter
// Specifies the settings for events that cause a campaign to be sent.
type CampaignEventFilter struct {
	Dimensions EventDimensions `json:"Dimensions"`
	FilterType FilterTypeEnum  `json:"FilterType"`
}
