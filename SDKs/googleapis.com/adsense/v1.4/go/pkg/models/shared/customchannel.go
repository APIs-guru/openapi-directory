package shared

// CustomChannelTargetingInfo
// The targeting information of this custom channel, if activated.
type CustomChannelTargetingInfo struct {
	AdsAppearOn  *string `json:"adsAppearOn,omitempty"`
	Description  *string `json:"description,omitempty"`
	Location     *string `json:"location,omitempty"`
	SiteLanguage *string `json:"siteLanguage,omitempty"`
}

type CustomChannel struct {
	Code          *string                     `json:"code,omitempty"`
	ID            *string                     `json:"id,omitempty"`
	Kind          *string                     `json:"kind,omitempty"`
	Name          *string                     `json:"name,omitempty"`
	TargetingInfo *CustomChannelTargetingInfo `json:"targetingInfo,omitempty"`
}
