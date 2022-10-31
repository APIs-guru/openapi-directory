package shared

type CreateConstraintInput struct {
	AcceptLanguage   *string `json:"AcceptLanguage,omitempty"`
	Description      *string `json:"Description,omitempty"`
	IdempotencyToken string  `json:"IdempotencyToken"`
	Parameters       string  `json:"Parameters"`
	PortfolioID      string  `json:"PortfolioId"`
	ProductID        string  `json:"ProductId"`
	Type             string  `json:"Type"`
}
