package shared



type GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal struct {
    AdsPersonalizationEnabled *bool `json:"adsPersonalizationEnabled,omitempty"`
    AdvertiserDisplayName *string `json:"advertiserDisplayName,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    CampaignDataSharingEnabled *bool `json:"campaignDataSharingEnabled,omitempty"`
    CostDataSharingEnabled *bool `json:"costDataSharingEnabled,omitempty"`
    LinkProposalStatusDetails *GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails `json:"linkProposalStatusDetails,omitempty"`
    Name *string `json:"name,omitempty"`
    ValidationEmail *string `json:"validationEmail,omitempty"`
    
}

