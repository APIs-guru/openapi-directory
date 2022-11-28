package shared

// CouponConfiguration
// This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.
type CouponConfiguration struct {
	CouponCode                 *string `json:"couponCode,omitempty"`
	CouponType                 *string `json:"couponType,omitempty"`
	MaxCouponRedemptionPerUser *int32  `json:"maxCouponRedemptionPerUser,omitempty"`
}
