package shared

// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink
// A link between a GA4 property and a Display & Video 360 advertiser.
type GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink struct {
	AdsPersonalizationEnabled  *bool   `json:"adsPersonalizationEnabled,omitempty"`
	AdvertiserDisplayName      *string `json:"advertiserDisplayName,omitempty"`
	AdvertiserID               *string `json:"advertiserId,omitempty"`
	CampaignDataSharingEnabled *bool   `json:"campaignDataSharingEnabled,omitempty"`
	CostDataSharingEnabled     *bool   `json:"costDataSharingEnabled,omitempty"`
	Name                       *string `json:"name,omitempty"`
}

// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput
// A link between a GA4 property and a Display & Video 360 advertiser.
type GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput struct {
	AdsPersonalizationEnabled  *bool   `json:"adsPersonalizationEnabled,omitempty"`
	AdvertiserID               *string `json:"advertiserId,omitempty"`
	CampaignDataSharingEnabled *bool   `json:"campaignDataSharingEnabled,omitempty"`
	CostDataSharingEnabled     *bool   `json:"costDataSharingEnabled,omitempty"`
}
