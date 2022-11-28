package shared

// CampaignsResponse
// Provides information about the configuration and other settings for all the campaigns that are associated with an application.
type CampaignsResponse struct {
	Item      []CampaignResponse `json:"Item"`
	NextToken *string            `json:"NextToken,omitempty"`
}
