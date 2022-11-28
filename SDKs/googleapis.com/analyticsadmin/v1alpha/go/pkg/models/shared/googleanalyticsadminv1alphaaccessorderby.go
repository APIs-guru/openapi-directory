package shared

// GoogleAnalyticsAdminV1alphaAccessOrderBy
// Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.
type GoogleAnalyticsAdminV1alphaAccessOrderBy struct {
	Desc      *bool                                                     `json:"desc,omitempty"`
	Dimension *GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy `json:"dimension,omitempty"`
	Metric    *GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy    `json:"metric,omitempty"`
}
