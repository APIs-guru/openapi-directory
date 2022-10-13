package shared

type GoogleAnalyticsAdminV1alphaListAccountsResponse struct {
	Accounts      []GoogleAnalyticsAdminV1alphaAccount `json:"accounts"`
	NextPageToken *string                              `json:"nextPageToken"`
}
