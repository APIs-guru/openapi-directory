package shared

type DescribeResourcePoliciesResponse struct {
	NextToken        *string          `json:"nextToken"`
	ResourcePolicies []ResourcePolicy `json:"resourcePolicies"`
}
