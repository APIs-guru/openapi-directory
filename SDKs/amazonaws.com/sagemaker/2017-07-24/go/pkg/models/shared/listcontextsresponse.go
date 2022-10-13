package shared

type ListContextsResponse struct {
	ContextSummaries []ContextSummary `json:"ContextSummaries"`
	NextToken        *string          `json:"NextToken"`
}
