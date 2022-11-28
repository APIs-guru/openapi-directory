package shared

// SubscriptionPurchasesDeferRequest
// Request for the purchases.subscriptions.defer API.
type SubscriptionPurchasesDeferRequest struct {
	DeferralInfo *SubscriptionDeferralInfo `json:"deferralInfo,omitempty"`
}
