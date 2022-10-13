package shared

type ListWorldTemplatesResponse struct {
	NextToken         *string           `json:"nextToken"`
	TemplateSummaries []TemplateSummary `json:"templateSummaries"`
}
