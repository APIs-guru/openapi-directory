package shared

type ListServiceActionsInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	PageSize       *int64  `json:"PageSize"`
	PageToken      *string `json:"PageToken"`
}
