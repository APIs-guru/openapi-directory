package shared

// GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput
// Request message for BatchCreateUserLinks RPC.
type GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput struct {
	NotifyNewUsers *bool                                                   `json:"notifyNewUsers,omitempty"`
	Requests       []GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput `json:"requests,omitempty"`
}
