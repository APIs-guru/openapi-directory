package shared

// ProductPurchase
// A ProductPurchase resource indicates the status of a user's inapp product purchase.
type ProductPurchase struct {
	ConsumptionState   *int32
	DeveloperPayload   *string
	Kind               *string
	OrderID            *string
	PurchaseState      *int32
	PurchaseTimeMillis *string
	PurchaseType       *int32
}
