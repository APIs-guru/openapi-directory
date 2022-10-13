package shared

type ListDistributedGrantsRequest struct {
	Filters    []Filter `json:"Filters"`
	GrantArns  []string `json:"GrantArns"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
}
