package shared

type DescribeServiceActionExecutionParametersInput struct {
	AcceptLanguage       *string `json:"AcceptLanguage"`
	ProvisionedProductID string  `json:"ProvisionedProductId"`
	ServiceActionID      string  `json:"ServiceActionId"`
}
