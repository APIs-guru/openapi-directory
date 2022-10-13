package shared

type Coupon struct {
	RedemptionCode *string `json:"redemptionCode"`
	Terms          *Terms  `json:"terms"`
}
