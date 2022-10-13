package shared

type VoidedPurchase struct {
	Kind               *string `json:"kind"`
	OrderID            *string `json:"orderId"`
	PurchaseTimeMillis *string `json:"purchaseTimeMillis"`
	PurchaseToken      *string `json:"purchaseToken"`
	VoidedReason       *int32  `json:"voidedReason"`
	VoidedSource       *int32  `json:"voidedSource"`
	VoidedTimeMillis   *string `json:"voidedTimeMillis"`
}
