package shared



type GoogleAnalyticsAdminV1alphaRunAccessReportRequest struct {
    DateRanges []GoogleAnalyticsAdminV1alphaAccessDateRange `json:"dateRanges,omitempty"`
    DimensionFilter *GoogleAnalyticsAdminV1alphaAccessFilterExpression `json:"dimensionFilter,omitempty"`
    Dimensions []GoogleAnalyticsAdminV1alphaAccessDimension `json:"dimensions,omitempty"`
    Limit *string `json:"limit,omitempty"`
    MetricFilter *GoogleAnalyticsAdminV1alphaAccessFilterExpression `json:"metricFilter,omitempty"`
    Metrics []GoogleAnalyticsAdminV1alphaAccessMetric `json:"metrics,omitempty"`
    Offset *string `json:"offset,omitempty"`
    OrderBys []GoogleAnalyticsAdminV1alphaAccessOrderBy `json:"orderBys,omitempty"`
    ReturnEntityQuota *bool `json:"returnEntityQuota,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    
}

