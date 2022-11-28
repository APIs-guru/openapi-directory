package shared

// GoogleAnalyticsAdminV1alphaAccessMetricHeader
// Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
type GoogleAnalyticsAdminV1alphaAccessMetricHeader struct {
	MetricName *string `json:"metricName,omitempty"`
}
