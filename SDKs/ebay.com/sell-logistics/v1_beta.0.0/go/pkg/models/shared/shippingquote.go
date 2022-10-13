package shared

type ShippingQuote struct {
	CreationDate         *string               `json:"creationDate"`
	ExpirationDate       *string               `json:"expirationDate"`
	Orders               []Order               `json:"orders"`
	PackageSpecification *PackageSpecification `json:"packageSpecification"`
	Rates                []Rate                `json:"rates"`
	ShipFrom             *Contact              `json:"shipFrom"`
	ShipTo               *Contact              `json:"shipTo"`
	ShippingQuoteID      *string               `json:"shippingQuoteId"`
	Warnings             []Error               `json:"warnings"`
}
