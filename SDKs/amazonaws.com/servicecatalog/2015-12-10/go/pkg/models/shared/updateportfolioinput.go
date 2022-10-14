package shared

type UpdatePortfolioInput struct {
	AcceptLanguage *string  `json:"AcceptLanguage,omitempty"`
	AddTags        []Tag    `json:"AddTags,omitempty"`
	Description    *string  `json:"Description,omitempty"`
	DisplayName    *string  `json:"DisplayName,omitempty"`
	ID             string   `json:"Id"`
	ProviderName   *string  `json:"ProviderName,omitempty"`
	RemoveTags     []string `json:"RemoveTags,omitempty"`
}
