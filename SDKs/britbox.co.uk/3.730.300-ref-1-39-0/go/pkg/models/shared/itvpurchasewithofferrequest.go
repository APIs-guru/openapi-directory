package shared

type ItvPurchaseWithOfferRequest struct {
	CouponID               string  `json:"couponId"`
	PaymentMethodFromToken *string `json:"paymentMethodFromToken,omitempty"`
	PaymentMethodID        *string `json:"paymentMethodId,omitempty"`
	PlanID                 string  `json:"planId"`
	ProfileToken           string  `json:"profileToken"`
}
