package shared

type ListReceivedGrantsRequest struct {
	Filters    []Filter `json:"Filters"`
	GrantArns  []string `json:"GrantArns"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
}
