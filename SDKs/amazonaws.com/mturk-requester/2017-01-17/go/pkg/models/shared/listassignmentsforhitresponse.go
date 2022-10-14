package shared

type ListAssignmentsForHitResponse struct {
	Assignments []Assignment `json:"Assignments,omitempty"`
	NextToken   *string      `json:"NextToken,omitempty"`
	NumResults  *int64       `json:"NumResults,omitempty"`
}
