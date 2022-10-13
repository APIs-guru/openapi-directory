package shared

type Deposit struct {
	Amount         *Amount         `json:"amount"`
	DueIn          *TimeDuration   `json:"dueIn"`
	PaymentMethods []PaymentMethod `json:"paymentMethods"`
}
