package shared

type ListAccountAssignmentsResponse struct {
	AccountAssignments []AccountAssignment `json:"AccountAssignments"`
	NextToken          *string             `json:"NextToken"`
}
