package shared

type DescribePortfolioShareStatusOutput struct {
	OrganizationNodeValue *string          `json:"OrganizationNodeValue"`
	PortfolioID           *string          `json:"PortfolioId"`
	PortfolioShareToken   *string          `json:"PortfolioShareToken"`
	ShareDetails          *ShareDetails    `json:"ShareDetails"`
	Status                *ShareStatusEnum `json:"Status"`
}
