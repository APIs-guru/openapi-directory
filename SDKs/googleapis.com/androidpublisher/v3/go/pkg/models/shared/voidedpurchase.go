package shared

type VoidedPurchase struct {
	Kind               *string `json:"kind,omitempty"`
	OrderID            *string `json:"orderId,omitempty"`
	PurchaseTimeMillis *string `json:"purchaseTimeMillis,omitempty"`
	PurchaseToken      *string `json:"purchaseToken,omitempty"`
	VoidedReason       *int32  `json:"voidedReason,omitempty"`
	VoidedSource       *int32  `json:"voidedSource,omitempty"`
	VoidedTimeMillis   *string `json:"voidedTimeMillis,omitempty"`
}
