package shared

// GoogleAnalyticsAdminV1alphaAccount
// A resource message representing a Google Analytics account.
type GoogleAnalyticsAdminV1alphaAccount struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Deleted     *bool   `json:"deleted,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	RegionCode  *string `json:"regionCode,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}

// GoogleAnalyticsAdminV1alphaAccountInput
// A resource message representing a Google Analytics account.
type GoogleAnalyticsAdminV1alphaAccountInput struct {
	DisplayName *string `json:"displayName,omitempty"`
	RegionCode  *string `json:"regionCode,omitempty"`
}
