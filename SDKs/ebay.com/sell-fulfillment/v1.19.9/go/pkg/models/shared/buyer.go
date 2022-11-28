package shared

// Buyer
// This type contains information about the order's buyer.
type Buyer struct {
	TaxAddress    *TaxAddress    `json:"taxAddress,omitempty"`
	TaxIdentifier *TaxIdentifier `json:"taxIdentifier,omitempty"`
	Username      *string        `json:"username,omitempty"`
}
