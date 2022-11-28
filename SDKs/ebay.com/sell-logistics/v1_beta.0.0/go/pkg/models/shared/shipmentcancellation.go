package shared

// ShipmentCancellation
// This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.
type ShipmentCancellation struct {
	CancellationRequestedDate *string `json:"cancellationRequestedDate,omitempty"`
	CancellationStatus        *string `json:"cancellationStatus,omitempty"`
}
