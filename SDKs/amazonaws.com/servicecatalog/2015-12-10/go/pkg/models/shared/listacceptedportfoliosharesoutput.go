package shared

type ListAcceptedPortfolioSharesOutput struct {
	NextPageToken    *string           `json:"NextPageToken"`
	PortfolioDetails []PortfolioDetail `json:"PortfolioDetails"`
}
