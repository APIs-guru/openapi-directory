package shared

type GoogleAnalyticsAdminV1alphaRunAccessReportResponse struct {
	DimensionHeaders []GoogleAnalyticsAdminV1alphaAccessDimensionHeader `json:"dimensionHeaders"`
	MetricHeaders    []GoogleAnalyticsAdminV1alphaAccessMetricHeader    `json:"metricHeaders"`
	Quota            *GoogleAnalyticsAdminV1alphaAccessQuota            `json:"quota"`
	RowCount         *int32                                             `json:"rowCount"`
	Rows             []GoogleAnalyticsAdminV1alphaAccessRow             `json:"rows"`
}
