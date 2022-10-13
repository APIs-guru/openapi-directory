package shared

type CreateCampaignRequest struct {
	CampaignConfig     *CampaignConfig `json:"campaignConfig"`
	MinProvisionedTps  *int64          `json:"minProvisionedTPS"`
	Name               string          `json:"name"`
	SolutionVersionArn string          `json:"solutionVersionArn"`
}
