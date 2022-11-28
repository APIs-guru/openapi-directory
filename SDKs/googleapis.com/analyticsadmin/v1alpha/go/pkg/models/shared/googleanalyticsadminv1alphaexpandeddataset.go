package shared

// GoogleAnalyticsAdminV1alphaExpandedDataSet
// A resource message representing a GA4 ExpandedDataSet.
type GoogleAnalyticsAdminV1alphaExpandedDataSet struct {
	DataCollectionStartTime   *string                                                     `json:"dataCollectionStartTime,omitempty"`
	Description               *string                                                     `json:"description,omitempty"`
	DimensionFilterExpression *GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression `json:"dimensionFilterExpression,omitempty"`
	DimensionNames            []string                                                    `json:"dimensionNames,omitempty"`
	DisplayName               *string                                                     `json:"displayName,omitempty"`
	MetricNames               []string                                                    `json:"metricNames,omitempty"`
	Name                      *string                                                     `json:"name,omitempty"`
}
