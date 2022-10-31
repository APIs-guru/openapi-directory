package shared

type UpdatePortfolioShareOutput struct {
	PortfolioShareToken *string          `json:"PortfolioShareToken,omitempty"`
	Status              *ShareStatusEnum `json:"Status,omitempty"`
}
