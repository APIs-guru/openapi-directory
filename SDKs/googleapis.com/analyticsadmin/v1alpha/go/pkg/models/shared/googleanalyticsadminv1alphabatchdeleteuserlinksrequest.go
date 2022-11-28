package shared

// GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest
// Request message for BatchDeleteUserLinks RPC.
type GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest struct {
	Requests []GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest `json:"requests,omitempty"`
}
