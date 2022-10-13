package shared

type GoogleAnalyticsAdminV1alphaListAccountSummariesResponse struct {
	AccountSummaries []GoogleAnalyticsAdminV1alphaAccountSummary `json:"accountSummaries"`
	NextPageToken    *string                                     `json:"nextPageToken"`
}
