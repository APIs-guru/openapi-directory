package shared

type CreatePortfolioShareInput struct {
	AcceptLanguage   *string           `json:"AcceptLanguage,omitempty"`
	AccountID        *string           `json:"AccountId,omitempty"`
	OrganizationNode *OrganizationNode `json:"OrganizationNode,omitempty"`
	PortfolioID      string            `json:"PortfolioId"`
	ShareTagOptions  *bool             `json:"ShareTagOptions,omitempty"`
}
