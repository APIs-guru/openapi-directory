package shared

type SearchFlowExecutionsResponse struct {
	NextToken *string                `json:"nextToken"`
	Summaries []FlowExecutionSummary `json:"summaries"`
}
