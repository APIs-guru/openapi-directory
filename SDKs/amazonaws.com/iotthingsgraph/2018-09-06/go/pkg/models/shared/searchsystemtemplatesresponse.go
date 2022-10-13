package shared

type SearchSystemTemplatesResponse struct {
	NextToken *string                 `json:"nextToken"`
	Summaries []SystemTemplateSummary `json:"summaries"`
}
