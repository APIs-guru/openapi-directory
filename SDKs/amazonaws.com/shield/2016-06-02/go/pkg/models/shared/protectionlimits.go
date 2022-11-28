package shared

// ProtectionLimits
// Limits settings on protections for your subscription.
type ProtectionLimits struct {
	ProtectedResourceTypeLimits []Limit `json:"ProtectedResourceTypeLimits"`
}
