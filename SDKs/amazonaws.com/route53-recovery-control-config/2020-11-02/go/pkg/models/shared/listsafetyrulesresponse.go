package shared

type ListSafetyRulesResponse struct {
	NextToken   *string `json:"NextToken"`
	SafetyRules []Rule  `json:"SafetyRules"`
}
