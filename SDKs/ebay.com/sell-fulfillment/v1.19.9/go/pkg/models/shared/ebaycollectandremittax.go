package shared

type EbayCollectAndRemitTax struct {
	Amount           *Amount           `json:"amount,omitempty"`
	CollectionMethod *string           `json:"collectionMethod,omitempty"`
	EbayReference    *EbayTaxReference `json:"ebayReference,omitempty"`
	TaxType          *string           `json:"taxType,omitempty"`
}
