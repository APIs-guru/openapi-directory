package shared

type GetAccessControlEffectResponse struct {
	Effect       *AccessControlRuleEffectEnum `json:"Effect"`
	MatchedRules []string                     `json:"MatchedRules"`
}
