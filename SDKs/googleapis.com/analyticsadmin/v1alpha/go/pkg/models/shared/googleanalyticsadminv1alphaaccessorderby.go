package shared

type GoogleAnalyticsAdminV1alphaAccessOrderBy struct {
	Desc      *bool                                                     `json:"desc,omitempty"`
	Dimension *GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy `json:"dimension,omitempty"`
	Metric    *GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy    `json:"metric,omitempty"`
}
