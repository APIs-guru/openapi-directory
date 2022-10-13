package shared

type TaxIdentifier struct {
	IssuingCountry    *string `json:"issuingCountry"`
	TaxIdentifierType *string `json:"taxIdentifierType"`
	TaxpayerID        *string `json:"taxpayerId"`
}
