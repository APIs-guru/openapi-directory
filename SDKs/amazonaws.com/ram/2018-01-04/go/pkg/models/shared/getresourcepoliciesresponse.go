package shared

type GetResourcePoliciesResponse struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Policies  []string `json:"policies,omitempty"`
}
