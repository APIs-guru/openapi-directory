package shared

// SearchAssignmentsResponse
// The response for ReservationService.SearchAssignments.
type SearchAssignmentsResponse struct {
	Assignments   []Assignment `json:"assignments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
