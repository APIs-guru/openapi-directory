package shared

type CustomerServiceMetricsFilterCriteria struct {
	CustomerServiceMetricType *string  `json:"customerServiceMetricType"`
	EvaluationMarketplaceID   *string  `json:"evaluationMarketplaceId"`
	ListingCategories         []string `json:"listingCategories"`
	ShippingRegions           []string `json:"shippingRegions"`
}
