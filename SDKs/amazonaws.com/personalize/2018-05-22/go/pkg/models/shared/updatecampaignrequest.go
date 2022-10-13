package shared

type UpdateCampaignRequest struct {
	CampaignArn        string          `json:"campaignArn"`
	CampaignConfig     *CampaignConfig `json:"campaignConfig"`
	MinProvisionedTps  *int64          `json:"minProvisionedTPS"`
	SolutionVersionArn *string         `json:"solutionVersionArn"`
}
