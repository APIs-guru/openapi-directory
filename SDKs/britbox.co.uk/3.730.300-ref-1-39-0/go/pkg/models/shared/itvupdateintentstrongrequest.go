package shared

type ItvUpdateIntentStrongRequest struct {
	PaymentMethodFromToken *string `json:"paymentMethodFromToken"`
	PaymentMethodID        *string `json:"paymentMethodId"`
	ProfileToken           string  `json:"profileToken"`
}
