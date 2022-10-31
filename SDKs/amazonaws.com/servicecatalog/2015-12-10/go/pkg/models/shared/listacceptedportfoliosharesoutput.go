package shared

type ListAcceptedPortfolioSharesOutput struct {
	NextPageToken    *string           `json:"NextPageToken,omitempty"`
	PortfolioDetails []PortfolioDetail `json:"PortfolioDetails,omitempty"`
}
