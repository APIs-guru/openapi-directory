package shared

type AwsWafWebACLRule struct {
	Action         *WafAction         `json:"Action"`
	ExcludedRules  []WafExcludedRule  `json:"ExcludedRules"`
	OverrideAction *WafOverrideAction `json:"OverrideAction"`
	Priority       *int64             `json:"Priority"`
	RuleID         *string            `json:"RuleId"`
	Type           *string            `json:"Type"`
}
