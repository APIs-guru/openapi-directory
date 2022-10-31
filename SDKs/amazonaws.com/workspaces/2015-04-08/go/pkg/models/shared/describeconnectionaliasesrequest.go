package shared

type DescribeConnectionAliasesRequest struct {
	AliasIds   []string `json:"AliasIds,omitempty"`
	Limit      *int64   `json:"Limit,omitempty"`
	NextToken  *string  `json:"NextToken,omitempty"`
	ResourceID *string  `json:"ResourceId,omitempty"`
}
