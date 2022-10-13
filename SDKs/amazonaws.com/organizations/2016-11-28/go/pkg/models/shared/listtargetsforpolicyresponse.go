package shared

type ListTargetsForPolicyResponse struct {
	NextToken *string               `json:"NextToken"`
	Targets   []PolicyTargetSummary `json:"Targets"`
}
