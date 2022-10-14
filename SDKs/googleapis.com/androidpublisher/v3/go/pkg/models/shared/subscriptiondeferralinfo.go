package shared

type SubscriptionDeferralInfo struct {
	DesiredExpiryTimeMillis  *string `json:"desiredExpiryTimeMillis,omitempty"`
	ExpectedExpiryTimeMillis *string `json:"expectedExpiryTimeMillis,omitempty"`
}
