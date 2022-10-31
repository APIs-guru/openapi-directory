package shared



type DeletePortfolioShareInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    AccountID *string `json:"AccountId,omitempty"`
    OrganizationNode *OrganizationNode `json:"OrganizationNode,omitempty"`
    PortfolioID string `json:"PortfolioId"`
    
}

