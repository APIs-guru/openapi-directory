package shared

type ItvUpdateIntentStrongRequest struct {
	PaymentMethodFromToken *string `json:"paymentMethodFromToken,omitempty"`
	PaymentMethodID        *string `json:"paymentMethodId,omitempty"`
	ProfileToken           string  `json:"profileToken"`
}
