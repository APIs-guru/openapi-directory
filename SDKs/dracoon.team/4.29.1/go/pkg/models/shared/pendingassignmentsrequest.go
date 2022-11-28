package shared

// PendingAssignmentsRequest
// Request model for handling pending assignments
type PendingAssignmentsRequest struct {
	Items []PendingAssignment `json:"items"`
}
