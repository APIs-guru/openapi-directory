package shared

type GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest struct {
	NotifyNewUsers *bool                                              `json:"notifyNewUsers"`
	Requests       []GoogleAnalyticsAdminV1alphaCreateUserLinkRequest `json:"requests"`
}
