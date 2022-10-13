package shared

type DescribeConnectionAliasesRequest struct {
	AliasIds   []string `json:"AliasIds"`
	Limit      *int64   `json:"Limit"`
	NextToken  *string  `json:"NextToken"`
	ResourceID *string  `json:"ResourceId"`
}
