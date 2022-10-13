package shared

type DescribePortfolioSharesInput struct {
	PageSize    *int64                         `json:"PageSize"`
	PageToken   *string                        `json:"PageToken"`
	PortfolioID string                         `json:"PortfolioId"`
	Type        DescribePortfolioShareTypeEnum `json:"Type"`
}
