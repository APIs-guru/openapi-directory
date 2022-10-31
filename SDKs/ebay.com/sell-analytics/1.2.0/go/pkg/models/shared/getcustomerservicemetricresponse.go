package shared

type GetCustomerServiceMetricResponse struct {
	DimensionMetrics []DimensionMetric `json:"dimensionMetrics,omitempty"`
	EvaluationCycle  *EvaluationCycle  `json:"evaluationCycle,omitempty"`
	MarketplaceID    *string           `json:"marketplaceId,omitempty"`
}
