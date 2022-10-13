package shared

type Buyer struct {
	TaxAddress    *TaxAddress    `json:"taxAddress"`
	TaxIdentifier *TaxIdentifier `json:"taxIdentifier"`
	Username      *string        `json:"username"`
}
