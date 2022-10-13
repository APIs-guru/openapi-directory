package shared

type DescribePortfolioOutput struct {
	Budgets         []BudgetDetail    `json:"Budgets"`
	PortfolioDetail *PortfolioDetail  `json:"PortfolioDetail"`
	TagOptions      []TagOptionDetail `json:"TagOptions"`
	Tags            []Tag             `json:"Tags"`
}
