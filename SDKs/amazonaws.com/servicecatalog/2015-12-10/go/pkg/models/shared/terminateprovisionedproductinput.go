package shared



type TerminateProvisionedProductInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    IgnoreErrors *bool `json:"IgnoreErrors,omitempty"`
    ProvisionedProductID *string `json:"ProvisionedProductId,omitempty"`
    ProvisionedProductName *string `json:"ProvisionedProductName,omitempty"`
    RetainPhysicalResources *bool `json:"RetainPhysicalResources,omitempty"`
    TerminateToken string `json:"TerminateToken"`
    
}

