package shared

// Payment
// This type is used to provide details about the seller payments for an order.
type Payment struct {
	Amount             *Amount       `json:"amount,omitempty"`
	PaymentDate        *string       `json:"paymentDate,omitempty"`
	PaymentHolds       []PaymentHold `json:"paymentHolds,omitempty"`
	PaymentMethod      *string       `json:"paymentMethod,omitempty"`
	PaymentReferenceID *string       `json:"paymentReferenceId,omitempty"`
	PaymentStatus      *string       `json:"paymentStatus,omitempty"`
}
