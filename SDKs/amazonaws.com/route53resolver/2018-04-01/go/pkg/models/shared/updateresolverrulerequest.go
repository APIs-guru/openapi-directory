package shared

type UpdateResolverRuleRequest struct {
	Config         ResolverRuleConfig `json:"Config"`
	ResolverRuleID string             `json:"ResolverRuleId"`
}
