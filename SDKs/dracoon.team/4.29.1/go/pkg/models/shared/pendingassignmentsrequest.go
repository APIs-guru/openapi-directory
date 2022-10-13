package shared

type PendingAssignmentsRequest struct {
	Items []PendingAssignment `json:"items"`
}
