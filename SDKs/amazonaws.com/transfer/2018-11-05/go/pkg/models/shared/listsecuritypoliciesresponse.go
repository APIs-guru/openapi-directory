package shared

type ListSecurityPoliciesResponse struct {
	NextToken           *string  `json:"NextToken"`
	SecurityPolicyNames []string `json:"SecurityPolicyNames"`
}
