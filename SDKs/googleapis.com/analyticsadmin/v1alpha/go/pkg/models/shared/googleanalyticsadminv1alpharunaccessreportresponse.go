package shared



type GoogleAnalyticsAdminV1alphaRunAccessReportResponse struct {
    DimensionHeaders []GoogleAnalyticsAdminV1alphaAccessDimensionHeader `json:"dimensionHeaders,omitempty"`
    MetricHeaders []GoogleAnalyticsAdminV1alphaAccessMetricHeader `json:"metricHeaders,omitempty"`
    Quota *GoogleAnalyticsAdminV1alphaAccessQuota `json:"quota,omitempty"`
    RowCount *int32 `json:"rowCount,omitempty"`
    Rows []GoogleAnalyticsAdminV1alphaAccessRow `json:"rows,omitempty"`
    
}

