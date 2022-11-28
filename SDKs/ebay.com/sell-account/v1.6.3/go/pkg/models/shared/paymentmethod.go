package shared

// PaymentMethod
// Container specifying a payment method that is accepted by the seller. Specify multiple payment methods by repeating this container. For more on payment methods, see Accepted payments policy. Note that payment methods are not applicable to classified ad listings &ndash; all classified ad payments are handled off of the eBay platform.
type PaymentMethod struct {
	Brands                    []string                   `json:"brands,omitempty"`
	PaymentMethodType         *string                    `json:"paymentMethodType,omitempty"`
	RecipientAccountReference *RecipientAccountReference `json:"recipientAccountReference,omitempty"`
}
