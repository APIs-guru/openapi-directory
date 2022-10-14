package shared

type ListPortfoliosForProductOutput struct {
	NextPageToken    *string           `json:"NextPageToken,omitempty"`
	PortfolioDetails []PortfolioDetail `json:"PortfolioDetails,omitempty"`
}
