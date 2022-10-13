package shared

type CreatePortfolioInput struct {
	AcceptLanguage   *string `json:"AcceptLanguage"`
	Description      *string `json:"Description"`
	DisplayName      string  `json:"DisplayName"`
	IdempotencyToken string  `json:"IdempotencyToken"`
	ProviderName     string  `json:"ProviderName"`
	Tags             []Tag   `json:"Tags"`
}
