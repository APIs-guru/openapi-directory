package shared

type CustomChannelTargetingInfo struct {
	AdsAppearOn  *string `json:"adsAppearOn"`
	Description  *string `json:"description"`
	Location     *string `json:"location"`
	SiteLanguage *string `json:"siteLanguage"`
}

type CustomChannel struct {
	Code          *string                     `json:"code"`
	ID            *string                     `json:"id"`
	Kind          *string                     `json:"kind"`
	Name          *string                     `json:"name"`
	TargetingInfo *CustomChannelTargetingInfo `json:"targetingInfo"`
}
