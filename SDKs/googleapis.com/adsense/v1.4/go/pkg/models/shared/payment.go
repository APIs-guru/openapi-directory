package shared



type Payment struct {
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PaymentAmount *string `json:"paymentAmount,omitempty"`
    PaymentAmountCurrencyCode *string `json:"paymentAmountCurrencyCode,omitempty"`
    PaymentDate *string `json:"paymentDate,omitempty"`
    
}

