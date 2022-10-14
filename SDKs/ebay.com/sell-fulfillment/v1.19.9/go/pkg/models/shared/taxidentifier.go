package shared

type TaxIdentifier struct {
	IssuingCountry    *string `json:"issuingCountry,omitempty"`
	TaxIdentifierType *string `json:"taxIdentifierType,omitempty"`
	TaxpayerID        *string `json:"taxpayerId,omitempty"`
}
