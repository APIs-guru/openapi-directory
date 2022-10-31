package shared



type CouponConfiguration struct {
    CouponCode *string `json:"couponCode,omitempty"`
    CouponType *string `json:"couponType,omitempty"`
    MaxCouponRedemptionPerUser *int32 `json:"maxCouponRedemptionPerUser,omitempty"`
    
}

