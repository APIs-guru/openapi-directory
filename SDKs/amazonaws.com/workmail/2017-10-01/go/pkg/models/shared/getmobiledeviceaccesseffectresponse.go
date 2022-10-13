package shared

type GetMobileDeviceAccessEffectResponse struct {
	Effect       *MobileDeviceAccessRuleEffectEnum `json:"Effect"`
	MatchedRules []MobileDeviceAccessMatchedRule   `json:"MatchedRules"`
}
