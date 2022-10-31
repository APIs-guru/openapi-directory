package shared

type GetProvisionedProductOutputsInput struct {
	AcceptLanguage         *string  `json:"AcceptLanguage,omitempty"`
	OutputKeys             []string `json:"OutputKeys,omitempty"`
	PageSize               *int64   `json:"PageSize,omitempty"`
	PageToken              *string  `json:"PageToken,omitempty"`
	ProvisionedProductID   *string  `json:"ProvisionedProductId,omitempty"`
	ProvisionedProductName *string  `json:"ProvisionedProductName,omitempty"`
}
