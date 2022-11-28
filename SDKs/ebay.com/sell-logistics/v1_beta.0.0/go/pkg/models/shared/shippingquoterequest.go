package shared

// ShippingQuoteRequest
// This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
type ShippingQuoteRequest struct {
	Orders               []Order               `json:"orders,omitempty"`
	PackageSpecification *PackageSpecification `json:"packageSpecification,omitempty"`
	ShipFrom             *Contact              `json:"shipFrom,omitempty"`
	ShipTo               *Contact              `json:"shipTo,omitempty"`
}
