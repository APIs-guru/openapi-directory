package shared

// SubscriptionPurchase
// A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
type SubscriptionPurchase struct {
	AutoRenewing            *bool
	InitiationTimestampMsec *string
	Kind                    *string
	ValidUntilTimestampMsec *string
}
