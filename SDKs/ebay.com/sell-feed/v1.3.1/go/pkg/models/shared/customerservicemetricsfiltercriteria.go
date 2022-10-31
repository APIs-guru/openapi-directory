package shared

type CustomerServiceMetricsFilterCriteria struct {
	CustomerServiceMetricType *string  `json:"customerServiceMetricType,omitempty"`
	EvaluationMarketplaceID   *string  `json:"evaluationMarketplaceId,omitempty"`
	ListingCategories         []string `json:"listingCategories,omitempty"`
	ShippingRegions           []string `json:"shippingRegions,omitempty"`
}
