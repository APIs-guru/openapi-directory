package shared

type GoogleAnalyticsAdminV1alphaGoogleAdsLink struct {
	AdsPersonalizationEnabled *bool   `json:"adsPersonalizationEnabled"`
	CanManageClients          *bool   `json:"canManageClients"`
	CreateTime                *string `json:"createTime"`
	CreatorEmailAddress       *string `json:"creatorEmailAddress"`
	CustomerID                *string `json:"customerId"`
	Name                      *string `json:"name"`
	UpdateTime                *string `json:"updateTime"`
}
