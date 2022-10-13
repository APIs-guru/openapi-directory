package shared

type ListPoliciesResponse struct {
	NextToken *string         `json:"NextToken"`
	Policies  []PolicySummary `json:"Policies"`
}
