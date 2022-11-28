package shared

// VoidedPurchase
// A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
type VoidedPurchase struct {
	Kind               *string
	PurchaseTimeMillis *string
	PurchaseToken      *string
	VoidedTimeMillis   *string
}
