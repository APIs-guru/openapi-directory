package shared

type ListOrganizationPortfolioAccessInput struct {
	AcceptLanguage       *string                  `json:"AcceptLanguage"`
	OrganizationNodeType OrganizationNodeTypeEnum `json:"OrganizationNodeType"`
	PageSize             *int64                   `json:"PageSize"`
	PageToken            *string                  `json:"PageToken"`
	PortfolioID          string                   `json:"PortfolioId"`
}
