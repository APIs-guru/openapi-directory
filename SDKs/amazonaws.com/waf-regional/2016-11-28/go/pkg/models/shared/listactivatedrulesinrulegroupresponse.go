package shared

type ListActivatedRulesInRuleGroupResponse struct {
	ActivatedRules []ActivatedRule `json:"ActivatedRules"`
	NextMarker     *string         `json:"NextMarker"`
}
