package shared

type DealPausingInfoPauseRoleEnum string

const (
	DealPausingInfoPauseRoleEnumBuyerSellerRoleUnspecified DealPausingInfoPauseRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
	DealPausingInfoPauseRoleEnumBuyer                      DealPausingInfoPauseRoleEnum = "BUYER"
	DealPausingInfoPauseRoleEnumSeller                     DealPausingInfoPauseRoleEnum = "SELLER"
)

type DealPausingInfo struct {
	PauseReason      *string                       `json:"pauseReason,omitempty"`
	PauseRole        *DealPausingInfoPauseRoleEnum `json:"pauseRole,omitempty"`
	PausingConsented *bool                         `json:"pausingConsented,omitempty"`
}
