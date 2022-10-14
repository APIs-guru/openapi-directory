package shared

type DescribePortfolioSharesInput struct {
	PageSize    *int64                         `json:"PageSize,omitempty"`
	PageToken   *string                        `json:"PageToken,omitempty"`
	PortfolioID string                         `json:"PortfolioId"`
	Type        DescribePortfolioShareTypeEnum `json:"Type"`
}
