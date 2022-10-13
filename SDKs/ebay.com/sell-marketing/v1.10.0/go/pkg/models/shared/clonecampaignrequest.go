package shared

type CloneCampaignRequest struct {
	CampaignName    *string          `json:"campaignName"`
	EndDate         *string          `json:"endDate"`
	FundingStrategy *FundingStrategy `json:"fundingStrategy"`
	StartDate       *string          `json:"startDate"`
}
