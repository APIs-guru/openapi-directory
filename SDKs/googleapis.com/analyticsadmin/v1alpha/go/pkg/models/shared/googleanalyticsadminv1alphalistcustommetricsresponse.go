package shared

// GoogleAnalyticsAdminV1alphaListCustomMetricsResponse
// Response message for ListCustomMetrics RPC.
type GoogleAnalyticsAdminV1alphaListCustomMetricsResponse struct {
	CustomMetrics []GoogleAnalyticsAdminV1alphaCustomMetric `json:"customMetrics,omitempty"`
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
}
