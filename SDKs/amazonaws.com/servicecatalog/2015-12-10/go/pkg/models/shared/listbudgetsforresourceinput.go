package shared

type ListBudgetsForResourceInput struct {
	AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
	PageSize       *int64  `json:"PageSize,omitempty"`
	PageToken      *string `json:"PageToken,omitempty"`
	ResourceID     string  `json:"ResourceId"`
}
