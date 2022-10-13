package shared

type CreatePortfolioOutput struct {
	PortfolioDetail *PortfolioDetail `json:"PortfolioDetail"`
	Tags            []Tag            `json:"Tags"`
}
