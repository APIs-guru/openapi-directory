package shared

type InfoFromBuyer struct {
	Note                   *string        `json:"note"`
	ReturnShipmentTracking []TrackingInfo `json:"returnShipmentTracking"`
}
