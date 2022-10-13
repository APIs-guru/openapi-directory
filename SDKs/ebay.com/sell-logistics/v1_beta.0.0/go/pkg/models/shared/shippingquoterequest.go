package shared

type ShippingQuoteRequest struct {
	Orders               []Order               `json:"orders"`
	PackageSpecification *PackageSpecification `json:"packageSpecification"`
	ShipFrom             *Contact              `json:"shipFrom"`
	ShipTo               *Contact              `json:"shipTo"`
}
