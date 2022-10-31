package shared

type CampaignsResponse struct {
	Item      []CampaignResponse `json:"Item"`
	NextToken *string            `json:"NextToken,omitempty"`
}
