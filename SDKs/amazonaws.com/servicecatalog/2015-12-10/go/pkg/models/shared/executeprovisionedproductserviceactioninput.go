package shared

type ExecuteProvisionedProductServiceActionInput struct {
	AcceptLanguage       *string             `json:"AcceptLanguage"`
	ExecuteToken         string              `json:"ExecuteToken"`
	Parameters           map[string][]string `json:"Parameters"`
	ProvisionedProductID string              `json:"ProvisionedProductId"`
	ServiceActionID      string              `json:"ServiceActionId"`
}
