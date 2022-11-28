package shared

// GoogleAnalyticsAdminV1alphaAccessRow
// Access report data for each row.
type GoogleAnalyticsAdminV1alphaAccessRow struct {
	DimensionValues []GoogleAnalyticsAdminV1alphaAccessDimensionValue `json:"dimensionValues,omitempty"`
	MetricValues    []GoogleAnalyticsAdminV1alphaAccessMetricValue    `json:"metricValues,omitempty"`
}
