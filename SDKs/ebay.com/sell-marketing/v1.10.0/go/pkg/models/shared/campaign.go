package shared

type Campaign struct {
	CampaignCriterion *CampaignCriterion `json:"campaignCriterion"`
	CampaignID        *string            `json:"campaignId"`
	CampaignName      *string            `json:"campaignName"`
	CampaignStatus    *string            `json:"campaignStatus"`
	EndDate           *string            `json:"endDate"`
	FundingStrategy   *FundingStrategy   `json:"fundingStrategy"`
	MarketplaceID     *string            `json:"marketplaceId"`
	StartDate         *string            `json:"startDate"`
}
