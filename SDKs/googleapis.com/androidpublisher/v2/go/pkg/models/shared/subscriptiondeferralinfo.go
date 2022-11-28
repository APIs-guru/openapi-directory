package shared

// SubscriptionDeferralInfo
// A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
type SubscriptionDeferralInfo struct {
	DesiredExpiryTimeMillis  *string `json:"desiredExpiryTimeMillis,omitempty"`
	ExpectedExpiryTimeMillis *string `json:"expectedExpiryTimeMillis,omitempty"`
}
