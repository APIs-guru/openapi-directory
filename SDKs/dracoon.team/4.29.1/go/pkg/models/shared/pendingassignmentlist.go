package shared

type PendingAssignmentList struct {
	Items []PendingAssignmentData `json:"items"`
	Range *Range                  `json:"range"`
}
