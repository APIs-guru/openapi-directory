package shared

type DisassociatePrincipalFromPortfolioInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	PortfolioID    string  `json:"PortfolioId"`
	PrincipalArn   string  `json:"PrincipalARN"`
}
