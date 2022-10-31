package shared

type ListWorldTemplatesResponse struct {
	NextToken         *string           `json:"nextToken,omitempty"`
	TemplateSummaries []TemplateSummary `json:"templateSummaries,omitempty"`
}
