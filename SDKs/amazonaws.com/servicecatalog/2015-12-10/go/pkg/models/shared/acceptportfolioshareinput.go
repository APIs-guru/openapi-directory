package shared

type AcceptPortfolioShareInput struct {
	AcceptLanguage     *string                 `json:"AcceptLanguage"`
	PortfolioID        string                  `json:"PortfolioId"`
	PortfolioShareType *PortfolioShareTypeEnum `json:"PortfolioShareType"`
}
