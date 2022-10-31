package shared




type DealPauseStatusFirstPausedByEnum string

const (
    DealPauseStatusFirstPausedByEnumBuyerSellerRoleUnspecified DealPauseStatusFirstPausedByEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
DealPauseStatusFirstPausedByEnumBuyer DealPauseStatusFirstPausedByEnum = "BUYER"
DealPauseStatusFirstPausedByEnumSeller DealPauseStatusFirstPausedByEnum = "SELLER"
)


type DealPauseStatus struct {
    BuyerPauseReason *string `json:"buyerPauseReason,omitempty"`
    FirstPausedBy *DealPauseStatusFirstPausedByEnum `json:"firstPausedBy,omitempty"`
    HasBuyerPaused *bool `json:"hasBuyerPaused,omitempty"`
    HasSellerPaused *bool `json:"hasSellerPaused,omitempty"`
    SellerPauseReason *string `json:"sellerPauseReason,omitempty"`
    
}

