package shared

type ListAcceptedPortfolioSharesInput struct {
	AcceptLanguage     *string                 `json:"AcceptLanguage,omitempty"`
	PageSize           *int64                  `json:"PageSize,omitempty"`
	PageToken          *string                 `json:"PageToken,omitempty"`
	PortfolioShareType *PortfolioShareTypeEnum `json:"PortfolioShareType,omitempty"`
}
