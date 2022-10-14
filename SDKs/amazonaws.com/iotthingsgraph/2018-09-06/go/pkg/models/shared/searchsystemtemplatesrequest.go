package shared

type SearchSystemTemplatesRequest struct {
	Filters    []SystemTemplateFilter `json:"filters,omitempty"`
	MaxResults *int64                 `json:"maxResults,omitempty"`
	NextToken  *string                `json:"nextToken,omitempty"`
}
