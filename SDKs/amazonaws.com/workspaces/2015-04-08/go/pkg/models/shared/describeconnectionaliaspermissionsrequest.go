package shared

type DescribeConnectionAliasPermissionsRequest struct {
	AliasID    string  `json:"AliasId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
