package shared

type GetCustomerServiceMetricResponse struct {
	DimensionMetrics []DimensionMetric `json:"dimensionMetrics"`
	EvaluationCycle  *EvaluationCycle  `json:"evaluationCycle"`
	MarketplaceID    *string           `json:"marketplaceId"`
}
