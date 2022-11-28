package shared

// CloneCampaignRequest
// This type defines the fields needed for a clone-campaign request.
type CloneCampaignRequest struct {
	CampaignName    *string          `json:"campaignName,omitempty"`
	EndDate         *string          `json:"endDate,omitempty"`
	FundingStrategy *FundingStrategy `json:"fundingStrategy,omitempty"`
	StartDate       *string          `json:"startDate,omitempty"`
}
