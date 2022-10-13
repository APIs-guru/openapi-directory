package shared

type ListCampaignsResponse struct {
	Campaigns []CampaignSummary `json:"campaigns"`
	NextToken *string           `json:"nextToken"`
}
