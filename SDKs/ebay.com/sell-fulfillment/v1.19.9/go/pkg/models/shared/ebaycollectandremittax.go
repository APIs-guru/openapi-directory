package shared

// EbayCollectAndRemitTax
// This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority. 'Collect and Remit' tax includes US state-mandated sales tax, 'Goods and Services' tax in Australia or New Zealand, VAT collected for the UK and EU countries.
type EbayCollectAndRemitTax struct {
	Amount           *Amount           `json:"amount,omitempty"`
	CollectionMethod *string           `json:"collectionMethod,omitempty"`
	EbayReference    *EbayTaxReference `json:"ebayReference,omitempty"`
	TaxType          *string           `json:"taxType,omitempty"`
}
