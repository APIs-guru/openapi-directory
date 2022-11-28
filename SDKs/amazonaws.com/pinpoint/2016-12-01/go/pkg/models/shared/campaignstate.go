package shared

// CampaignState
// Provides information about the status of a campaign.
type CampaignState struct {
	CampaignStatus *CampaignStatusEnum `json:"CampaignStatus,omitempty"`
}
