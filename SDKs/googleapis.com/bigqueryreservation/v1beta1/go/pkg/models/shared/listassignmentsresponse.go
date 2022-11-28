package shared

// ListAssignmentsResponse
// The response for ReservationService.ListAssignments.
type ListAssignmentsResponse struct {
	Assignments   []Assignment `json:"assignments,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
