package shared

type GetResourcePoliciesResponse struct {
	NextToken *string  `json:"nextToken"`
	Policies  []string `json:"policies"`
}
