package shared

// InappPurchase
// An InappPurchase resource indicates the status of a user's inapp product purchase.
type InappPurchase struct {
	ConsumptionState *int32
	DeveloperPayload *string
	Kind             *string
	OrderID          *string
	PurchaseState    *int32
	PurchaseTime     *string
	PurchaseType     *int32
}
