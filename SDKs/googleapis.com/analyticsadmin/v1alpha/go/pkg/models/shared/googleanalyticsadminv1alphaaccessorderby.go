package shared

type GoogleAnalyticsAdminV1alphaAccessOrderBy struct {
	Desc      *bool                                                     `json:"desc"`
	Dimension *GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy `json:"dimension"`
	Metric    *GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy    `json:"metric"`
}
