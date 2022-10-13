package shared

type GetSystemTemplateRevisionsResponse struct {
	NextToken *string                 `json:"nextToken"`
	Summaries []SystemTemplateSummary `json:"summaries"`
}
