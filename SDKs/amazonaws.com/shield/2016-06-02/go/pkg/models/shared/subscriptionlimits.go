package shared

type SubscriptionLimits struct {
	ProtectionGroupLimits ProtectionGroupLimits `json:"ProtectionGroupLimits"`
	ProtectionLimits      ProtectionLimits      `json:"ProtectionLimits"`
}
