package shared

type SearchSystemInstancesRequest struct {
	Filters    []SystemInstanceFilter `json:"filters"`
	MaxResults *int64                 `json:"maxResults"`
	NextToken  *string                `json:"nextToken"`
}
