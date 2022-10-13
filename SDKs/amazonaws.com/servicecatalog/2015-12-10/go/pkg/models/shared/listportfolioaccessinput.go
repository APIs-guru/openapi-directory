package shared

type ListPortfolioAccessInput struct {
	AcceptLanguage       *string `json:"AcceptLanguage"`
	OrganizationParentID *string `json:"OrganizationParentId"`
	PageSize             *int64  `json:"PageSize"`
	PageToken            *string `json:"PageToken"`
	PortfolioID          string  `json:"PortfolioId"`
}
