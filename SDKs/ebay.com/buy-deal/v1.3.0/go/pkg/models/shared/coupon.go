package shared

type Coupon struct {
	RedemptionCode *string `json:"redemptionCode,omitempty"`
	Terms          *Terms  `json:"terms,omitempty"`
}
