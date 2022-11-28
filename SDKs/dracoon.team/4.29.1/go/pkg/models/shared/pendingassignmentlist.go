package shared

// PendingAssignmentList
// List of pending assignments
type PendingAssignmentList struct {
	Items []PendingAssignmentData `json:"items"`
	Range *Range                  `json:"range,omitempty"`
}
