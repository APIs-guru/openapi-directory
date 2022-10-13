package shared

type SearchFlowTemplatesRequest struct {
	Filters    []FlowTemplateFilter `json:"filters"`
	MaxResults *int64               `json:"maxResults"`
	NextToken  *string              `json:"nextToken"`
}
