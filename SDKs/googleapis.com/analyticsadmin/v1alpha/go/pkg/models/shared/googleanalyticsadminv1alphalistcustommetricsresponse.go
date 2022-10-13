package shared

type GoogleAnalyticsAdminV1alphaListCustomMetricsResponse struct {
	CustomMetrics []GoogleAnalyticsAdminV1alphaCustomMetric `json:"customMetrics"`
	NextPageToken *string                                   `json:"nextPageToken"`
}
