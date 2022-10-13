package shared

type SearchSystemTemplatesRequest struct {
	Filters    []SystemTemplateFilter `json:"filters"`
	MaxResults *int64                 `json:"maxResults"`
	NextToken  *string                `json:"nextToken"`
}
