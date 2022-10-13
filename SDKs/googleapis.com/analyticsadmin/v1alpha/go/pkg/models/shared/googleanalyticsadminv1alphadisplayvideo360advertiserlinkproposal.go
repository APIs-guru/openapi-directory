package shared

type GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal struct {
	AdsPersonalizationEnabled  *bool                                                 `json:"adsPersonalizationEnabled"`
	AdvertiserDisplayName      *string                                               `json:"advertiserDisplayName"`
	AdvertiserID               *string                                               `json:"advertiserId"`
	CampaignDataSharingEnabled *bool                                                 `json:"campaignDataSharingEnabled"`
	CostDataSharingEnabled     *bool                                                 `json:"costDataSharingEnabled"`
	LinkProposalStatusDetails  *GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails `json:"linkProposalStatusDetails"`
	Name                       *string                                               `json:"name"`
	ValidationEmail            *string                                               `json:"validationEmail"`
}
