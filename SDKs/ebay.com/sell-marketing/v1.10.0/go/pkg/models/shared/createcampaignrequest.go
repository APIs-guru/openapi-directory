package shared

// CreateCampaignRequest
// This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules).
type CreateCampaignRequest struct {
	CampaignCriterion *CampaignCriterion `json:"campaignCriterion,omitempty"`
	CampaignName      *string            `json:"campaignName,omitempty"`
	EndDate           *string            `json:"endDate,omitempty"`
	FundingStrategy   *FundingStrategy   `json:"fundingStrategy,omitempty"`
	MarketplaceID     *string            `json:"marketplaceId,omitempty"`
	StartDate         *string            `json:"startDate,omitempty"`
}
