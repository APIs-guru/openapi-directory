package shared



type CloneCampaignRequest struct {
    CampaignName *string `json:"campaignName,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    FundingStrategy *FundingStrategy `json:"fundingStrategy,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    
}

