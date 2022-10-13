package shared

type ItvPurchaseStrongRequest struct {
	PaymentMethodFromToken *string `json:"paymentMethodFromToken"`
	PaymentMethodID        *string `json:"paymentMethodId"`
	PlanID                 string  `json:"planId"`
	ProfileToken           string  `json:"profileToken"`
	Voucher                *string `json:"voucher"`
}
