package shared



type Deposit struct {
    Amount *Amount `json:"amount,omitempty"`
    DueIn *TimeDuration `json:"dueIn,omitempty"`
    PaymentMethods []PaymentMethod `json:"paymentMethods,omitempty"`
    
}

