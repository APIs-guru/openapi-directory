package shared

type ShipmentCancellation struct {
	CancellationRequestedDate *string `json:"cancellationRequestedDate,omitempty"`
	CancellationStatus        *string `json:"cancellationStatus,omitempty"`
}
