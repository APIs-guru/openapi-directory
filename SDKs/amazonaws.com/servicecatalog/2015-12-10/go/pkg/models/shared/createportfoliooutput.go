package shared



type CreatePortfolioOutput struct {
    PortfolioDetail *PortfolioDetail `json:"PortfolioDetail,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

