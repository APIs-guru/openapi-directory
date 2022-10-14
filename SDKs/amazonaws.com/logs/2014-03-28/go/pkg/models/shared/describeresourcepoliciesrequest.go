package shared

type DescribeResourcePoliciesRequest struct {
	Limit     *int64  `json:"limit,omitempty"`
	NextToken *string `json:"nextToken,omitempty"`
}
