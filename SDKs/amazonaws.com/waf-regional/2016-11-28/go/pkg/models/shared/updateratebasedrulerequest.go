package shared



type UpdateRateBasedRuleRequest struct {
    ChangeToken string `json:"ChangeToken"`
    RateLimit int64 `json:"RateLimit"`
    RuleID string `json:"RuleId"`
    Updates []RuleUpdate `json:"Updates"`
    
}

