package shared

type DescribePortfolioSharesOutput struct {
	NextPageToken         *string                `json:"NextPageToken"`
	PortfolioShareDetails []PortfolioShareDetail `json:"PortfolioShareDetails"`
}
