package shared

type ShipmentCancellation struct {
	CancellationRequestedDate *string `json:"cancellationRequestedDate"`
	CancellationStatus        *string `json:"cancellationStatus"`
}
