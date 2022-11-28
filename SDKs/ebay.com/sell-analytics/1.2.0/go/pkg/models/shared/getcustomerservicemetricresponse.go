package shared

// GetCustomerServiceMetricResponse
// This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.
type GetCustomerServiceMetricResponse struct {
	DimensionMetrics []DimensionMetric `json:"dimensionMetrics,omitempty"`
	EvaluationCycle  *EvaluationCycle  `json:"evaluationCycle,omitempty"`
	MarketplaceID    *string           `json:"marketplaceId,omitempty"`
}
