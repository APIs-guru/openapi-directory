package shared

type CreateCampaignRequest struct {
	CampaignCriterion *CampaignCriterion `json:"campaignCriterion,omitempty"`
	CampaignName      *string            `json:"campaignName,omitempty"`
	EndDate           *string            `json:"endDate,omitempty"`
	FundingStrategy   *FundingStrategy   `json:"fundingStrategy,omitempty"`
	MarketplaceID     *string            `json:"marketplaceId,omitempty"`
	StartDate         *string            `json:"startDate,omitempty"`
}
