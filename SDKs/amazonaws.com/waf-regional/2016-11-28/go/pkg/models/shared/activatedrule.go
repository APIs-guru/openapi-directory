package shared



type ActivatedRule struct {
    Action *WafAction `json:"Action,omitempty"`
    ExcludedRules []ExcludedRule `json:"ExcludedRules,omitempty"`
    OverrideAction *WafOverrideAction `json:"OverrideAction,omitempty"`
    Priority int64 `json:"Priority"`
    RuleID string `json:"RuleId"`
    Type *WafRuleTypeEnum `json:"Type,omitempty"`
    
}

