package shared

type ListDistributedGrantsRequest struct {
	Filters    []Filter `json:"Filters,omitempty"`
	GrantArns  []string `json:"GrantArns,omitempty"`
	MaxResults *int64   `json:"MaxResults,omitempty"`
	NextToken  *string  `json:"NextToken,omitempty"`
}
