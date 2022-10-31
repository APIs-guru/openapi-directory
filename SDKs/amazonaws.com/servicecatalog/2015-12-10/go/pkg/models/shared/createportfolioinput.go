package shared



type CreatePortfolioInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    Description *string `json:"Description,omitempty"`
    DisplayName string `json:"DisplayName"`
    IdempotencyToken string `json:"IdempotencyToken"`
    ProviderName string `json:"ProviderName"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

