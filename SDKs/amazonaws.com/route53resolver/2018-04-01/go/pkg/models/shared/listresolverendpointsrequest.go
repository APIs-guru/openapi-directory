package shared

type ListResolverEndpointsRequest struct {
	Filters    []Filter `json:"Filters"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
}
