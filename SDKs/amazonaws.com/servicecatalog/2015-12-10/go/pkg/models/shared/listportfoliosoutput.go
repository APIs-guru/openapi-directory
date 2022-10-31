package shared



type ListPortfoliosOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    PortfolioDetails []PortfolioDetail `json:"PortfolioDetails,omitempty"`
    
}

