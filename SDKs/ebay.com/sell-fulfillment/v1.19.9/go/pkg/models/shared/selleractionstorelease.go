package shared

// SellerActionsToRelease
// This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order.
type SellerActionsToRelease struct {
	SellerActionToRelease *string `json:"sellerActionToRelease,omitempty"`
}
