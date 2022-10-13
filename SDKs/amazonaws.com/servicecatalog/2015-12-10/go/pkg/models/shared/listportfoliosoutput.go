package shared

type ListPortfoliosOutput struct {
	NextPageToken    *string           `json:"NextPageToken"`
	PortfolioDetails []PortfolioDetail `json:"PortfolioDetails"`
}
