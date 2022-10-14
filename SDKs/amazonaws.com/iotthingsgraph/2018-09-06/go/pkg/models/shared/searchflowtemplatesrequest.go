package shared

type SearchFlowTemplatesRequest struct {
	Filters    []FlowTemplateFilter `json:"filters,omitempty"`
	MaxResults *int64               `json:"maxResults,omitempty"`
	NextToken  *string              `json:"nextToken,omitempty"`
}
