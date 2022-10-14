package shared

type Buyer struct {
	TaxAddress    *TaxAddress    `json:"taxAddress,omitempty"`
	TaxIdentifier *TaxIdentifier `json:"taxIdentifier,omitempty"`
	Username      *string        `json:"username,omitempty"`
}
