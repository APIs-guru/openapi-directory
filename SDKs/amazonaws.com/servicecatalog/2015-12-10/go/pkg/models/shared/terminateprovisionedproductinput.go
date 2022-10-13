package shared

type TerminateProvisionedProductInput struct {
	AcceptLanguage          *string `json:"AcceptLanguage"`
	IgnoreErrors            *bool   `json:"IgnoreErrors"`
	ProvisionedProductID    *string `json:"ProvisionedProductId"`
	ProvisionedProductName  *string `json:"ProvisionedProductName"`
	RetainPhysicalResources *bool   `json:"RetainPhysicalResources"`
	TerminateToken          string  `json:"TerminateToken"`
}
