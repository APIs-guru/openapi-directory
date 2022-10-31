package shared

type ShippingQuoteRequest struct {
	Orders               []Order               `json:"orders,omitempty"`
	PackageSpecification *PackageSpecification `json:"packageSpecification,omitempty"`
	ShipFrom             *Contact              `json:"shipFrom,omitempty"`
	ShipTo               *Contact              `json:"shipTo,omitempty"`
}
