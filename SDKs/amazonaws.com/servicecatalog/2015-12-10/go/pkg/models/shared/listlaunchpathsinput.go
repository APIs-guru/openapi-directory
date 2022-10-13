package shared

type ListLaunchPathsInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	PageSize       *int64  `json:"PageSize"`
	PageToken      *string `json:"PageToken"`
	ProductID      string  `json:"ProductId"`
}
