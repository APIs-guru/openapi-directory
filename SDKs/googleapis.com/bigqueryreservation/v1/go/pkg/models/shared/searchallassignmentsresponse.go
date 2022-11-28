package shared

// SearchAllAssignmentsResponse
// The response for ReservationService.SearchAllAssignments.
type SearchAllAssignmentsResponse struct {
	Assignments   []Assignment `json:"assignments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
