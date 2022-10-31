package shared

type ShippingQuote struct {
	CreationDate         *string               `json:"creationDate,omitempty"`
	ExpirationDate       *string               `json:"expirationDate,omitempty"`
	Orders               []Order               `json:"orders,omitempty"`
	PackageSpecification *PackageSpecification `json:"packageSpecification,omitempty"`
	Rates                []Rate                `json:"rates,omitempty"`
	ShipFrom             *Contact              `json:"shipFrom,omitempty"`
	ShipTo               *Contact              `json:"shipTo,omitempty"`
	ShippingQuoteID      *string               `json:"shippingQuoteId,omitempty"`
	Warnings             []Error               `json:"warnings,omitempty"`
}
