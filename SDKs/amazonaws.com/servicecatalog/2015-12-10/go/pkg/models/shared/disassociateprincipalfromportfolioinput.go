package shared

type DisassociatePrincipalFromPortfolioInput struct {
	AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
	PortfolioID    string  `json:"PortfolioId"`
	PrincipalArn   string  `json:"PrincipalARN"`
}
