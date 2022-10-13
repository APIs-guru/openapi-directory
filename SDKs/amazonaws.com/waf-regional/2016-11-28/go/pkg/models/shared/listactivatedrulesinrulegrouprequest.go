package shared

type ListActivatedRulesInRuleGroupRequest struct {
	Limit       *int64  `json:"Limit"`
	NextMarker  *string `json:"NextMarker"`
	RuleGroupID *string `json:"RuleGroupId"`
}
