package shared

// DealServingMetadataDealPauseStatus
// Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
type DealServingMetadataDealPauseStatus struct {
	BuyerPauseReason  *string `json:"buyerPauseReason,omitempty"`
	FirstPausedBy     *string `json:"firstPausedBy,omitempty"`
	HasBuyerPaused    *bool   `json:"hasBuyerPaused,omitempty"`
	HasSellerPaused   *bool   `json:"hasSellerPaused,omitempty"`
	SellerPauseReason *string `json:"sellerPauseReason,omitempty"`
}
