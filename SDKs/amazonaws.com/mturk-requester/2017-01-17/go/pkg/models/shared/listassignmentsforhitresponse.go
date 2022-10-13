package shared

type ListAssignmentsForHitResponse struct {
	Assignments []Assignment `json:"Assignments"`
	NextToken   *string      `json:"NextToken"`
	NumResults  *int64       `json:"NumResults"`
}
