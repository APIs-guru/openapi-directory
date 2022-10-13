package shared

type ListReservationsResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	Reservations  []Reservation `json:"reservations"`
}
