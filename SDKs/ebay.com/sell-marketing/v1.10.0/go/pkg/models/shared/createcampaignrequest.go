package shared

type CreateCampaignRequest struct {
	CampaignCriterion *CampaignCriterion `json:"campaignCriterion"`
	CampaignName      *string            `json:"campaignName"`
	EndDate           *string            `json:"endDate"`
	FundingStrategy   *FundingStrategy   `json:"fundingStrategy"`
	MarketplaceID     *string            `json:"marketplaceId"`
	StartDate         *string            `json:"startDate"`
}
