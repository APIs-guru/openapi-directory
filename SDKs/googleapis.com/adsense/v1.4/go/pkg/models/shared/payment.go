package shared

type Payment struct {
	ID                        *string `json:"id"`
	Kind                      *string `json:"kind"`
	PaymentAmount             *string `json:"paymentAmount"`
	PaymentAmountCurrencyCode *string `json:"paymentAmountCurrencyCode"`
	PaymentDate               *string `json:"paymentDate"`
}
