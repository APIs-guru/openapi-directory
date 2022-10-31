package shared

type UpdateProvisionedProductPropertiesInput struct {
	AcceptLanguage               *string           `json:"AcceptLanguage,omitempty"`
	IdempotencyToken             string            `json:"IdempotencyToken"`
	ProvisionedProductID         string            `json:"ProvisionedProductId"`
	ProvisionedProductProperties map[string]string `json:"ProvisionedProductProperties"`
}
