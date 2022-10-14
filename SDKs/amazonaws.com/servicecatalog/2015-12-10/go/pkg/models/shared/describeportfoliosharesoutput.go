package shared

type DescribePortfolioSharesOutput struct {
	NextPageToken         *string                `json:"NextPageToken,omitempty"`
	PortfolioShareDetails []PortfolioShareDetail `json:"PortfolioShareDetails,omitempty"`
}
