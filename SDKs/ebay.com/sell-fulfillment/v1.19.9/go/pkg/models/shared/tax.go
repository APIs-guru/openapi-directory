package shared

// Tax
// This type contains information about any sales tax applied to a line item.
type Tax struct {
	Amount  *Amount `json:"amount,omitempty"`
	TaxType *string `json:"taxType,omitempty"`
}
