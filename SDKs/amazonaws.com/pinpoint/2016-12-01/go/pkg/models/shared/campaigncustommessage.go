package shared

// CampaignCustomMessage
// Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.
type CampaignCustomMessage struct {
	Data *string `json:"Data,omitempty"`
}
