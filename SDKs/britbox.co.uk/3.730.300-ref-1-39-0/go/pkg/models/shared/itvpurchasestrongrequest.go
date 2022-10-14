package shared

type ItvPurchaseStrongRequest struct {
	PaymentMethodFromToken *string `json:"paymentMethodFromToken,omitempty"`
	PaymentMethodID        *string `json:"paymentMethodId,omitempty"`
	PlanID                 string  `json:"planId"`
	ProfileToken           string  `json:"profileToken"`
	Voucher                *string `json:"voucher,omitempty"`
}
