package shared



type ListStackInstancesForProvisionedProductInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    PageSize *int64 `json:"PageSize,omitempty"`
    PageToken *string `json:"PageToken,omitempty"`
    ProvisionedProductID string `json:"ProvisionedProductId"`
    
}

