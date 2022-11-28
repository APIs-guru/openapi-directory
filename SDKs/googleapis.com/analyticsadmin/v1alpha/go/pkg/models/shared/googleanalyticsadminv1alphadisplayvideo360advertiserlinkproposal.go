package shared

// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput
// A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
type GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput struct {
	AdsPersonalizationEnabled  *bool   `json:"adsPersonalizationEnabled,omitempty"`
	AdvertiserID               *string `json:"advertiserId,omitempty"`
	CampaignDataSharingEnabled *bool   `json:"campaignDataSharingEnabled,omitempty"`
	CostDataSharingEnabled     *bool   `json:"costDataSharingEnabled,omitempty"`
	ValidationEmail            *string `json:"validationEmail,omitempty"`
}

// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal
// A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
type GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal struct {
	AdsPersonalizationEnabled  *bool                                                 `json:"adsPersonalizationEnabled,omitempty"`
	AdvertiserDisplayName      *string                                               `json:"advertiserDisplayName,omitempty"`
	AdvertiserID               *string                                               `json:"advertiserId,omitempty"`
	CampaignDataSharingEnabled *bool                                                 `json:"campaignDataSharingEnabled,omitempty"`
	CostDataSharingEnabled     *bool                                                 `json:"costDataSharingEnabled,omitempty"`
	LinkProposalStatusDetails  *GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails `json:"linkProposalStatusDetails,omitempty"`
	Name                       *string                                               `json:"name,omitempty"`
	ValidationEmail            *string                                               `json:"validationEmail,omitempty"`
}
