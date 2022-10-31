package shared

type GetAccessControlEffectResponse struct {
	Effect       *AccessControlRuleEffectEnum `json:"Effect,omitempty"`
	MatchedRules []string                     `json:"MatchedRules,omitempty"`
}
