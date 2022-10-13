package shared

type EbayCollectAndRemitTax struct {
	Amount           *Amount           `json:"amount"`
	CollectionMethod *string           `json:"collectionMethod"`
	EbayReference    *EbayTaxReference `json:"ebayReference"`
	TaxType          *string           `json:"taxType"`
}
