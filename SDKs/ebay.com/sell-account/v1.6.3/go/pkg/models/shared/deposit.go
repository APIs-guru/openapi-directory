package shared

// Deposit
// A container that describes the details of a deposit. Used only with motor listings.
type Deposit struct {
	Amount         *Amount         `json:"amount,omitempty"`
	DueIn          *TimeDuration   `json:"dueIn,omitempty"`
	PaymentMethods []PaymentMethod `json:"paymentMethods,omitempty"`
}
