package shared

// Shipment
// This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
type Shipment struct {
	Cancellation           *ShipmentCancellation `json:"cancellation,omitempty"`
	CreationDate           *string               `json:"creationDate,omitempty"`
	LabelCustomMessage     *string               `json:"labelCustomMessage,omitempty"`
	LabelDownloadURL       *string               `json:"labelDownloadUrl,omitempty"`
	LabelSize              *string               `json:"labelSize,omitempty"`
	Orders                 []Order               `json:"orders,omitempty"`
	PackageSpecification   *PackageSpecification `json:"packageSpecification,omitempty"`
	Rate                   *PurchasedRate        `json:"rate,omitempty"`
	ReturnTo               *Contact              `json:"returnTo,omitempty"`
	ShipFrom               *Contact              `json:"shipFrom,omitempty"`
	ShipTo                 *Contact              `json:"shipTo,omitempty"`
	ShipmentID             *string               `json:"shipmentId,omitempty"`
	ShipmentTrackingNumber *string               `json:"shipmentTrackingNumber,omitempty"`
}
