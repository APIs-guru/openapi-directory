package shared

type IPRuleItem struct {
	IPRule   *string `json:"ipRule,omitempty"`
	RuleDesc *string `json:"ruleDesc,omitempty"`
}
