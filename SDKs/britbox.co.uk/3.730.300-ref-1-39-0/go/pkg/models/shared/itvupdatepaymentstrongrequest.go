package shared

type ItvUpdatePaymentStrongRequest struct {
	PaymentMethodFromToken *string `json:"paymentMethodFromToken,omitempty"`
	PaymentMethodID        *string `json:"paymentMethodId,omitempty"`
	ProfileToken           string  `json:"profileToken"`
}
