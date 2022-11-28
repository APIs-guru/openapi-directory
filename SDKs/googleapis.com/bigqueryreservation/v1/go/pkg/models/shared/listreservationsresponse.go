package shared

// ListReservationsResponse
// The response for ReservationService.ListReservations.
type ListReservationsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	Reservations  []Reservation `json:"reservations,omitempty"`
}
