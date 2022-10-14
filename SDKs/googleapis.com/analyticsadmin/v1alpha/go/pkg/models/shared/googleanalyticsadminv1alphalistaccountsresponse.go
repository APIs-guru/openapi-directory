package shared

type GoogleAnalyticsAdminV1alphaListAccountsResponse struct {
	Accounts      []GoogleAnalyticsAdminV1alphaAccount `json:"accounts,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
