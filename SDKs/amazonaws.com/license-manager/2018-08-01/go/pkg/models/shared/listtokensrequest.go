package shared

type ListTokensRequest struct {
	Filters    []Filter `json:"Filters"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
	TokenIds   []string `json:"TokenIds"`
}
