package shared

type UpdatePortfolioShareInput struct {
	AcceptLanguage   *string           `json:"AcceptLanguage"`
	AccountID        *string           `json:"AccountId"`
	OrganizationNode *OrganizationNode `json:"OrganizationNode"`
	PortfolioID      string            `json:"PortfolioId"`
	ShareTagOptions  *bool             `json:"ShareTagOptions"`
}
