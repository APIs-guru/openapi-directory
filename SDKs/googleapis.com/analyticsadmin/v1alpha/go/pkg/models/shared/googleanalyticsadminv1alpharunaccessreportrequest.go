package shared

type GoogleAnalyticsAdminV1alphaRunAccessReportRequest struct {
	DateRanges        []GoogleAnalyticsAdminV1alphaAccessDateRange       `json:"dateRanges"`
	DimensionFilter   *GoogleAnalyticsAdminV1alphaAccessFilterExpression `json:"dimensionFilter"`
	Dimensions        []GoogleAnalyticsAdminV1alphaAccessDimension       `json:"dimensions"`
	Limit             *string                                            `json:"limit"`
	MetricFilter      *GoogleAnalyticsAdminV1alphaAccessFilterExpression `json:"metricFilter"`
	Metrics           []GoogleAnalyticsAdminV1alphaAccessMetric          `json:"metrics"`
	Offset            *string                                            `json:"offset"`
	OrderBys          []GoogleAnalyticsAdminV1alphaAccessOrderBy         `json:"orderBys"`
	ReturnEntityQuota *bool                                              `json:"returnEntityQuota"`
	TimeZone          *string                                            `json:"timeZone"`
}
