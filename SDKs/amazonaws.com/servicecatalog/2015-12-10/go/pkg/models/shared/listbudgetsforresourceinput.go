package shared

type ListBudgetsForResourceInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	PageSize       *int64  `json:"PageSize"`
	PageToken      *string `json:"PageToken"`
	ResourceID     string  `json:"ResourceId"`
}
