package shared

// SubscriptionPurchasesDeferResponse
// Response for the purchases.subscriptions.defer API.
type SubscriptionPurchasesDeferResponse struct {
	NewExpiryTimeMillis *string `json:"newExpiryTimeMillis,omitempty"`
}
