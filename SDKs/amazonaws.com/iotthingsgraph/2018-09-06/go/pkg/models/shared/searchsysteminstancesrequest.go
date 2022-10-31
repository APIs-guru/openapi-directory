package shared

type SearchSystemInstancesRequest struct {
	Filters    []SystemInstanceFilter `json:"filters,omitempty"`
	MaxResults *int64                 `json:"maxResults,omitempty"`
	NextToken  *string                `json:"nextToken,omitempty"`
}
