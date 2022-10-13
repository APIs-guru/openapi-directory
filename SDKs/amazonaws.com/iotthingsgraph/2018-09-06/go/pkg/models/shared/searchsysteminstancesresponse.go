package shared

type SearchSystemInstancesResponse struct {
	NextToken *string                 `json:"nextToken"`
	Summaries []SystemInstanceSummary `json:"summaries"`
}
