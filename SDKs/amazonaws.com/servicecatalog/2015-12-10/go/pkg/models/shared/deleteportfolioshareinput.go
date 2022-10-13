package shared

type DeletePortfolioShareInput struct {
	AcceptLanguage   *string           `json:"AcceptLanguage"`
	AccountID        *string           `json:"AccountId"`
	OrganizationNode *OrganizationNode `json:"OrganizationNode"`
	PortfolioID      string            `json:"PortfolioId"`
}
