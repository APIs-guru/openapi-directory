package shared

type ActivatedRule struct {
	Action         *WafAction         `json:"Action"`
	ExcludedRules  []ExcludedRule     `json:"ExcludedRules"`
	OverrideAction *WafOverrideAction `json:"OverrideAction"`
	Priority       int64              `json:"Priority"`
	RuleID         string             `json:"RuleId"`
	Type           *WafRuleTypeEnum   `json:"Type"`
}
