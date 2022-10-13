package shared

type UpdateProvisionedProductPropertiesInput struct {
	AcceptLanguage               *string           `json:"AcceptLanguage"`
	IdempotencyToken             string            `json:"IdempotencyToken"`
	ProvisionedProductID         string            `json:"ProvisionedProductId"`
	ProvisionedProductProperties map[string]string `json:"ProvisionedProductProperties"`
}
