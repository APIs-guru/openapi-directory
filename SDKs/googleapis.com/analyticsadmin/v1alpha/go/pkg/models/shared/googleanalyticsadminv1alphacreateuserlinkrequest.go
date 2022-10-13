package shared

type GoogleAnalyticsAdminV1alphaCreateUserLinkRequest struct {
	NotifyNewUser *bool                                `json:"notifyNewUser"`
	Parent        *string                              `json:"parent"`
	UserLink      *GoogleAnalyticsAdminV1alphaUserLink `json:"userLink"`
}
