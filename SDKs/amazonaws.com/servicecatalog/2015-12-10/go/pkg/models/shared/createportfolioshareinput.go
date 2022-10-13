package shared

type CreatePortfolioShareInput struct {
	AcceptLanguage   *string           `json:"AcceptLanguage"`
	AccountID        *string           `json:"AccountId"`
	OrganizationNode *OrganizationNode `json:"OrganizationNode"`
	PortfolioID      string            `json:"PortfolioId"`
	ShareTagOptions  *bool             `json:"ShareTagOptions"`
}
