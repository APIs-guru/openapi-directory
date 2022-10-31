package shared



type GetMobileDeviceAccessEffectResponse struct {
    Effect *MobileDeviceAccessRuleEffectEnum `json:"Effect,omitempty"`
    MatchedRules []MobileDeviceAccessMatchedRule `json:"MatchedRules,omitempty"`
    
}

