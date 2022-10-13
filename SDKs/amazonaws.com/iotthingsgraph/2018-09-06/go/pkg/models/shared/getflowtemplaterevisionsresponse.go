package shared

type GetFlowTemplateRevisionsResponse struct {
	NextToken *string               `json:"nextToken"`
	Summaries []FlowTemplateSummary `json:"summaries"`
}
