package shared



type Payment struct {
    Amount *Amount `json:"amount,omitempty"`
    PaymentDate *string `json:"paymentDate,omitempty"`
    PaymentHolds []PaymentHold `json:"paymentHolds,omitempty"`
    PaymentMethod *string `json:"paymentMethod,omitempty"`
    PaymentReferenceID *string `json:"paymentReferenceId,omitempty"`
    PaymentStatus *string `json:"paymentStatus,omitempty"`
    
}

