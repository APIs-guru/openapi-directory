package shared

// Coupon
// The details for the coupon available for the item.
type Coupon struct {
	RedemptionCode *string `json:"redemptionCode,omitempty"`
	Terms          *Terms  `json:"terms,omitempty"`
}
