package shared

type DealServingMetadataDealPauseStatus struct {
	BuyerPauseReason  *string `json:"buyerPauseReason"`
	FirstPausedBy     *string `json:"firstPausedBy"`
	HasBuyerPaused    *bool   `json:"hasBuyerPaused"`
	HasSellerPaused   *bool   `json:"hasSellerPaused"`
	SellerPauseReason *string `json:"sellerPauseReason"`
}
