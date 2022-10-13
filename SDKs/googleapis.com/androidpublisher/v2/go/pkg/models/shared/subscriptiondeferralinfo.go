package shared

type SubscriptionDeferralInfo struct {
	DesiredExpiryTimeMillis  *string `json:"desiredExpiryTimeMillis"`
	ExpectedExpiryTimeMillis *string `json:"expectedExpiryTimeMillis"`
}
