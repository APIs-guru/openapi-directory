package shared

type ItvGooglePaySubscriptionRequest struct {
	PurchaseToken    string `json:"purchaseToken"`
	SubscriptionItem string `json:"subscriptionItem"`
}
