package shared

// ShippingQuote
// This complex type describes a &quot;shipping quote,&quot; which contains the parameters for a package shipment. The shipping quote contains a list of &quot;live quotes&quot; or rates for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller. Use the rateId value to select the specific service you want when you create a shipment by calling createFromShippingQuote.
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
