package shared

type GetProvisionedProductOutputsInput struct {
	AcceptLanguage         *string  `json:"AcceptLanguage"`
	OutputKeys             []string `json:"OutputKeys"`
	PageSize               *int64   `json:"PageSize"`
	PageToken              *string  `json:"PageToken"`
	ProvisionedProductID   *string  `json:"ProvisionedProductId"`
	ProvisionedProductName *string  `json:"ProvisionedProductName"`
}
