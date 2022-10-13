package shared

type ItvPurchaseWithOfferRequest struct {
	CouponID               string  `json:"couponId"`
	PaymentMethodFromToken *string `json:"paymentMethodFromToken"`
	PaymentMethodID        *string `json:"paymentMethodId"`
	PlanID                 string  `json:"planId"`
	ProfileToken           string  `json:"profileToken"`
}
