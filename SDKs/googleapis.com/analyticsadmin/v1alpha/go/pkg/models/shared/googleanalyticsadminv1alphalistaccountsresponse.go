package shared

// GoogleAnalyticsAdminV1alphaListAccountsResponse
// Request message for ListAccounts RPC.
type GoogleAnalyticsAdminV1alphaListAccountsResponse struct {
	Accounts      []GoogleAnalyticsAdminV1alphaAccount `json:"accounts,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
