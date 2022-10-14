package shared

type SearchSystemInstancesResponse struct {
	NextToken *string                 `json:"nextToken,omitempty"`
	Summaries []SystemInstanceSummary `json:"summaries,omitempty"`
}
