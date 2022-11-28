package shared

// GoogleAnalyticsAdminV1alphaSearchAds360LinkInput
// A link between a GA4 property and a Search Ads 360 entity.
type GoogleAnalyticsAdminV1alphaSearchAds360LinkInput struct {
	AdsPersonalizationEnabled  *bool   `json:"adsPersonalizationEnabled,omitempty"`
	AdvertiserID               *string `json:"advertiserId,omitempty"`
	CampaignDataSharingEnabled *bool   `json:"campaignDataSharingEnabled,omitempty"`
	CostDataSharingEnabled     *bool   `json:"costDataSharingEnabled,omitempty"`
	SiteStatsSharingEnabled    *bool   `json:"siteStatsSharingEnabled,omitempty"`
}

// GoogleAnalyticsAdminV1alphaSearchAds360Link
// A link between a GA4 property and a Search Ads 360 entity.
type GoogleAnalyticsAdminV1alphaSearchAds360Link struct {
	AdsPersonalizationEnabled  *bool   `json:"adsPersonalizationEnabled,omitempty"`
	AdvertiserDisplayName      *string `json:"advertiserDisplayName,omitempty"`
	AdvertiserID               *string `json:"advertiserId,omitempty"`
	CampaignDataSharingEnabled *bool   `json:"campaignDataSharingEnabled,omitempty"`
	CostDataSharingEnabled     *bool   `json:"costDataSharingEnabled,omitempty"`
	Name                       *string `json:"name,omitempty"`
	SiteStatsSharingEnabled    *bool   `json:"siteStatsSharingEnabled,omitempty"`
}
