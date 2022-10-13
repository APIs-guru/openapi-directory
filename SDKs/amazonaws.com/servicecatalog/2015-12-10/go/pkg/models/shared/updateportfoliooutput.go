package shared

type UpdatePortfolioOutput struct {
	PortfolioDetail *PortfolioDetail `json:"PortfolioDetail"`
	Tags            []Tag            `json:"Tags"`
}
