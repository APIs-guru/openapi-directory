package shared

type GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest struct {
	NotifyNewUsers *bool                                              `json:"notifyNewUsers,omitempty"`
	Requests       []GoogleAnalyticsAdminV1alphaCreateUserLinkRequest `json:"requests,omitempty"`
}
