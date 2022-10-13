package shared

type ListAcceptedPortfolioSharesInput struct {
	AcceptLanguage     *string                 `json:"AcceptLanguage"`
	PageSize           *int64                  `json:"PageSize"`
	PageToken          *string                 `json:"PageToken"`
	PortfolioShareType *PortfolioShareTypeEnum `json:"PortfolioShareType"`
}
