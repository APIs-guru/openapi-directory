package shared

// Campaign
// This type defines the fields that describe an ad campaign.
type Campaign struct {
	CampaignCriterion *CampaignCriterion `json:"campaignCriterion,omitempty"`
	CampaignID        *string            `json:"campaignId,omitempty"`
	CampaignName      *string            `json:"campaignName,omitempty"`
	CampaignStatus    *string            `json:"campaignStatus,omitempty"`
	EndDate           *string            `json:"endDate,omitempty"`
	FundingStrategy   *FundingStrategy   `json:"fundingStrategy,omitempty"`
	MarketplaceID     *string            `json:"marketplaceId,omitempty"`
	StartDate         *string            `json:"startDate,omitempty"`
}
