package shared

type GoogleAnalyticsAdminV1alphaSearchAds360Link struct {
	AdsPersonalizationEnabled  *bool   `json:"adsPersonalizationEnabled"`
	AdvertiserDisplayName      *string `json:"advertiserDisplayName"`
	AdvertiserID               *string `json:"advertiserId"`
	CampaignDataSharingEnabled *bool   `json:"campaignDataSharingEnabled"`
	CostDataSharingEnabled     *bool   `json:"costDataSharingEnabled"`
	Name                       *string `json:"name"`
	SiteStatsSharingEnabled    *bool   `json:"siteStatsSharingEnabled"`
}
