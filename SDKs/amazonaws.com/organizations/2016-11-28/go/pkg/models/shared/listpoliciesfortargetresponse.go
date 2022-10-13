package shared

type ListPoliciesForTargetResponse struct {
	NextToken *string         `json:"NextToken"`
	Policies  []PolicySummary `json:"Policies"`
}
