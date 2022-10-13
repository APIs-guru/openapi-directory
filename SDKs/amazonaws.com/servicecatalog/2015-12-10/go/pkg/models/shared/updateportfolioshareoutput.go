package shared

type UpdatePortfolioShareOutput struct {
	PortfolioShareToken *string          `json:"PortfolioShareToken"`
	Status              *ShareStatusEnum `json:"Status"`
}
