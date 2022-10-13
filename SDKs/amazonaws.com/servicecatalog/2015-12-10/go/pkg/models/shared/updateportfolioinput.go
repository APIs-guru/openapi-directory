package shared

type UpdatePortfolioInput struct {
	AcceptLanguage *string  `json:"AcceptLanguage"`
	AddTags        []Tag    `json:"AddTags"`
	Description    *string  `json:"Description"`
	DisplayName    *string  `json:"DisplayName"`
	ID             string   `json:"Id"`
	ProviderName   *string  `json:"ProviderName"`
	RemoveTags     []string `json:"RemoveTags"`
}
