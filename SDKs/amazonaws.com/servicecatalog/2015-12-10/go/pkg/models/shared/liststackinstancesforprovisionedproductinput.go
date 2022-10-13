package shared

type ListStackInstancesForProvisionedProductInput struct {
	AcceptLanguage       *string `json:"AcceptLanguage"`
	PageSize             *int64  `json:"PageSize"`
	PageToken            *string `json:"PageToken"`
	ProvisionedProductID string  `json:"ProvisionedProductId"`
}
