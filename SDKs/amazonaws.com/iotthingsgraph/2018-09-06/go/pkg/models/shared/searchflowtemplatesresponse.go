package shared

type SearchFlowTemplatesResponse struct {
	NextToken *string               `json:"nextToken"`
	Summaries []FlowTemplateSummary `json:"summaries"`
}
