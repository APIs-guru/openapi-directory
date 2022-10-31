package shared



type UpdatePortfolioOutput struct {
    PortfolioDetail *PortfolioDetail `json:"PortfolioDetail,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

