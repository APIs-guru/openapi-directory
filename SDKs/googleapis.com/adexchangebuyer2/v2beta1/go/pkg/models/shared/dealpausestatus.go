package shared

type DealPauseStatusFirstPausedByEnum string

const (
	DealPauseStatusFirstPausedByEnumBuyerSellerRoleUnspecified DealPauseStatusFirstPausedByEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
	DealPauseStatusFirstPausedByEnumBuyer                      DealPauseStatusFirstPausedByEnum = "BUYER"
	DealPauseStatusFirstPausedByEnumSeller                     DealPauseStatusFirstPausedByEnum = "SELLER"
)

type DealPauseStatus struct {
	BuyerPauseReason  *string                           `json:"buyerPauseReason"`
	FirstPausedBy     *DealPauseStatusFirstPausedByEnum `json:"firstPausedBy"`
	HasBuyerPaused    *bool                             `json:"hasBuyerPaused"`
	HasSellerPaused   *bool                             `json:"hasSellerPaused"`
	SellerPauseReason *string                           `json:"sellerPauseReason"`
}
