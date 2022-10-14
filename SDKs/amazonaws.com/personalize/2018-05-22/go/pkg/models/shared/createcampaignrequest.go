package shared

type CreateCampaignRequest struct {
	CampaignConfig     *CampaignConfig `json:"campaignConfig,omitempty"`
	MinProvisionedTps  *int64          `json:"minProvisionedTPS,omitempty"`
	Name               string          `json:"name"`
	SolutionVersionArn string          `json:"solutionVersionArn"`
}
