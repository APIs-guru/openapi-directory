package shared

type DescribeResourcePoliciesRequest struct {
	Limit     *int64  `json:"limit"`
	NextToken *string `json:"nextToken"`
}
