package shared

type Payment struct {
	Amount             *Amount       `json:"amount"`
	PaymentDate        *string       `json:"paymentDate"`
	PaymentHolds       []PaymentHold `json:"paymentHolds"`
	PaymentMethod      *string       `json:"paymentMethod"`
	PaymentReferenceID *string       `json:"paymentReferenceId"`
	PaymentStatus      *string       `json:"paymentStatus"`
}
