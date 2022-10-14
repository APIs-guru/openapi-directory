package shared

type DescribePortfolioShareStatusOutput struct {
	OrganizationNodeValue *string          `json:"OrganizationNodeValue,omitempty"`
	PortfolioID           *string          `json:"PortfolioId,omitempty"`
	PortfolioShareToken   *string          `json:"PortfolioShareToken,omitempty"`
	ShareDetails          *ShareDetails    `json:"ShareDetails,omitempty"`
	Status                *ShareStatusEnum `json:"Status,omitempty"`
}
