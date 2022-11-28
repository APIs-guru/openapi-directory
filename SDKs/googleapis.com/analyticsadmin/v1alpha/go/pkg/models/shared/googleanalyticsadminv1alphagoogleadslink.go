package shared

// GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput
// A link between a GA4 property and a Google Ads account.
type GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput struct {
	AdsPersonalizationEnabled *bool   `json:"adsPersonalizationEnabled,omitempty"`
	CustomerID                *string `json:"customerId,omitempty"`
}

// GoogleAnalyticsAdminV1alphaGoogleAdsLink
// A link between a GA4 property and a Google Ads account.
type GoogleAnalyticsAdminV1alphaGoogleAdsLink struct {
	AdsPersonalizationEnabled *bool   `json:"adsPersonalizationEnabled,omitempty"`
	CanManageClients          *bool   `json:"canManageClients,omitempty"`
	CreateTime                *string `json:"createTime,omitempty"`
	CreatorEmailAddress       *string `json:"creatorEmailAddress,omitempty"`
	CustomerID                *string `json:"customerId,omitempty"`
	Name                      *string `json:"name,omitempty"`
	UpdateTime                *string `json:"updateTime,omitempty"`
}
