package shared



type RuleGroup struct {
    RuleVariables *RuleVariables `json:"RuleVariables,omitempty"`
    RulesSource RulesSource `json:"RulesSource"`
    
}

