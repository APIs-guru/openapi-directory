package shared

type CouponConfiguration struct {
	CouponCode                 *string `json:"couponCode"`
	CouponType                 *string `json:"couponType"`
	MaxCouponRedemptionPerUser *int32  `json:"maxCouponRedemptionPerUser"`
}
