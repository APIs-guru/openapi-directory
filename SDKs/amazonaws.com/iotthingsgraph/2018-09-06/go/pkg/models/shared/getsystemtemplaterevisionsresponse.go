package shared

type GetSystemTemplateRevisionsResponse struct {
	NextToken *string                 `json:"nextToken,omitempty"`
	Summaries []SystemTemplateSummary `json:"summaries,omitempty"`
}
