package shared

type ListPortfoliosForProductOutput struct {
	NextPageToken    *string           `json:"NextPageToken"`
	PortfolioDetails []PortfolioDetail `json:"PortfolioDetails"`
}
