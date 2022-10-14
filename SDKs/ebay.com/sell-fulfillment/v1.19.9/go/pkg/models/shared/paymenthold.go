package shared

type PaymentHold struct {
	ExpectedReleaseDate    *string                  `json:"expectedReleaseDate,omitempty"`
	HoldAmount             *Amount                  `json:"holdAmount,omitempty"`
	HoldReason             *string                  `json:"holdReason,omitempty"`
	HoldState              *string                  `json:"holdState,omitempty"`
	ReleaseDate            *string                  `json:"releaseDate,omitempty"`
	SellerActionsToRelease []SellerActionsToRelease `json:"sellerActionsToRelease,omitempty"`
}
