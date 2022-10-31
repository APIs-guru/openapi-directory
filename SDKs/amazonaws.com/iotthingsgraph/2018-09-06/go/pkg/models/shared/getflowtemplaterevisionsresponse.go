package shared

type GetFlowTemplateRevisionsResponse struct {
	NextToken *string               `json:"nextToken,omitempty"`
	Summaries []FlowTemplateSummary `json:"summaries,omitempty"`
}
