package shared

// AwsWafWebACLRule
// Details for a rule in an WAF WebACL.
type AwsWafWebACLRule struct {
	Action         *WafAction         `json:"Action,omitempty"`
	ExcludedRules  []WafExcludedRule  `json:"ExcludedRules,omitempty"`
	OverrideAction *WafOverrideAction `json:"OverrideAction,omitempty"`
	Priority       *int64             `json:"Priority,omitempty"`
	RuleID         *string            `json:"RuleId,omitempty"`
	Type           *string            `json:"Type,omitempty"`
}
