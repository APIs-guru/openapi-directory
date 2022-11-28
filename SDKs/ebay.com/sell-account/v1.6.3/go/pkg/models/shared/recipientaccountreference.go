package shared

// RecipientAccountReference
// Recipient account information, like PayPal email. If the payment method is PayPal, this structure contains the recipient's PayPal email address.
type RecipientAccountReference struct {
	ReferenceID   *string `json:"referenceId,omitempty"`
	ReferenceType *string `json:"referenceType,omitempty"`
}
