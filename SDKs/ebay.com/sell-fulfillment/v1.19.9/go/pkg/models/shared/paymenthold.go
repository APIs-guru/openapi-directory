package shared

type PaymentHold struct {
	ExpectedReleaseDate    *string                  `json:"expectedReleaseDate"`
	HoldAmount             *Amount                  `json:"holdAmount"`
	HoldReason             *string                  `json:"holdReason"`
	HoldState              *string                  `json:"holdState"`
	ReleaseDate            *string                  `json:"releaseDate"`
	SellerActionsToRelease []SellerActionsToRelease `json:"sellerActionsToRelease"`
}
