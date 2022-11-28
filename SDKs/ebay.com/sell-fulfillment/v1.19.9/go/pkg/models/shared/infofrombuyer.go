package shared

// InfoFromBuyer
// This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.
type InfoFromBuyer struct {
	Note                   *string        `json:"note,omitempty"`
	ReturnShipmentTracking []TrackingInfo `json:"returnShipmentTracking,omitempty"`
}
