package shared

type GetResourcePoliciesOutput struct {
	NextToken        *string          `json:"nextToken"`
	ResourcePolicies []ResourcePolicy `json:"resourcePolicies"`
}
