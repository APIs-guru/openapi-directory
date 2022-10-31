package shared

type DealServingMetadataDealPauseStatus struct {
	BuyerPauseReason  *string `json:"buyerPauseReason,omitempty"`
	FirstPausedBy     *string `json:"firstPausedBy,omitempty"`
	HasBuyerPaused    *bool   `json:"hasBuyerPaused,omitempty"`
	HasSellerPaused   *bool   `json:"hasSellerPaused,omitempty"`
	SellerPauseReason *string `json:"sellerPauseReason,omitempty"`
}
