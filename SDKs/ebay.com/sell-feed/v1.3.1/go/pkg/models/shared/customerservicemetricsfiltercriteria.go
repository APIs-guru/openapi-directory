package shared

// CustomerServiceMetricsFilterCriteria
// A complex data type that filters data for report creation. See CustomerServiceMetricsFilterCriteria for fields and descriptions.
type CustomerServiceMetricsFilterCriteria struct {
	CustomerServiceMetricType *string  `json:"customerServiceMetricType,omitempty"`
	EvaluationMarketplaceID   *string  `json:"evaluationMarketplaceId,omitempty"`
	ListingCategories         []string `json:"listingCategories,omitempty"`
	ShippingRegions           []string `json:"shippingRegions,omitempty"`
}
