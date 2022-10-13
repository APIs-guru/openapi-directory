package shared

type PaymentMethod struct {
	Brands                    []string                   `json:"brands"`
	PaymentMethodType         *string                    `json:"paymentMethodType"`
	RecipientAccountReference *RecipientAccountReference `json:"recipientAccountReference"`
}
