package shared



type ExecuteProvisionedProductServiceActionInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    ExecuteToken string `json:"ExecuteToken"`
    Parameters map[string][]string `json:"Parameters,omitempty"`
    ProvisionedProductID string `json:"ProvisionedProductId"`
    ServiceActionID string `json:"ServiceActionId"`
    
}

