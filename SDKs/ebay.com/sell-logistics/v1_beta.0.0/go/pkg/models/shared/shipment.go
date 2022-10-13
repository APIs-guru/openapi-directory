package shared

type Shipment struct {
	Cancellation           *ShipmentCancellation `json:"cancellation"`
	CreationDate           *string               `json:"creationDate"`
	LabelCustomMessage     *string               `json:"labelCustomMessage"`
	LabelDownloadURL       *string               `json:"labelDownloadUrl"`
	LabelSize              *string               `json:"labelSize"`
	Orders                 []Order               `json:"orders"`
	PackageSpecification   *PackageSpecification `json:"packageSpecification"`
	Rate                   *PurchasedRate        `json:"rate"`
	ReturnTo               *Contact              `json:"returnTo"`
	ShipFrom               *Contact              `json:"shipFrom"`
	ShipTo                 *Contact              `json:"shipTo"`
	ShipmentID             *string               `json:"shipmentId"`
	ShipmentTrackingNumber *string               `json:"shipmentTrackingNumber"`
}
