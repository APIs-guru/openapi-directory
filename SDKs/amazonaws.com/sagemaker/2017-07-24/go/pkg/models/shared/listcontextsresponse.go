package shared

type ListContextsResponse struct {
	ContextSummaries []ContextSummary `json:"ContextSummaries,omitempty"`
	NextToken        *string          `json:"NextToken,omitempty"`
}
