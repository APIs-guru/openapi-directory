package shared

type GoogleAnalyticsAdminV1alphaListAccountSummariesResponse struct {
	AccountSummaries []GoogleAnalyticsAdminV1alphaAccountSummary `json:"accountSummaries,omitempty"`
	NextPageToken    *string                                     `json:"nextPageToken,omitempty"`
}
