package shared

type ListPrincipalsForPortfolioInput struct {
	AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
	PageSize       *int64  `json:"PageSize,omitempty"`
	PageToken      *string `json:"PageToken,omitempty"`
	PortfolioID    string  `json:"PortfolioId"`
}
