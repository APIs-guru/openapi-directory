package shared

// IPRuleItem
// Describes a rule for an IP access control group.
type IPRuleItem struct {
	IPRule   *string `json:"ipRule,omitempty"`
	RuleDesc *string `json:"ruleDesc,omitempty"`
}
