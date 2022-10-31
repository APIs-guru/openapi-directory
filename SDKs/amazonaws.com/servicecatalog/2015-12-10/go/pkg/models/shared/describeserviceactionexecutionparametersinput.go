package shared



type DescribeServiceActionExecutionParametersInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    ProvisionedProductID string `json:"ProvisionedProductId"`
    ServiceActionID string `json:"ServiceActionId"`
    
}

