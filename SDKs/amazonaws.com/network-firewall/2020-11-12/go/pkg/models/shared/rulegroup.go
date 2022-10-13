package shared

type RuleGroup struct {
	RuleVariables *RuleVariables `json:"RuleVariables"`
	RulesSource   RulesSource    `json:"RulesSource"`
}
