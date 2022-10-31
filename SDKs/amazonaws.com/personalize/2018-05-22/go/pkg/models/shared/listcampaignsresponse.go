package shared



type ListCampaignsResponse struct {
    Campaigns []CampaignSummary `json:"campaigns,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

