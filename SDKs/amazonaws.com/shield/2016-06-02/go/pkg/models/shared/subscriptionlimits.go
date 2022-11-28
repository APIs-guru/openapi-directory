package shared

// SubscriptionLimits
// Limits settings for your subscription.
type SubscriptionLimits struct {
	ProtectionGroupLimits ProtectionGroupLimits `json:"ProtectionGroupLimits"`
	ProtectionLimits      ProtectionLimits      `json:"ProtectionLimits"`
}
