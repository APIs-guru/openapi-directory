package shared



type DescribePortfolioOutput struct {
    Budgets []BudgetDetail `json:"Budgets,omitempty"`
    PortfolioDetail *PortfolioDetail `json:"PortfolioDetail,omitempty"`
    TagOptions []TagOptionDetail `json:"TagOptions,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

