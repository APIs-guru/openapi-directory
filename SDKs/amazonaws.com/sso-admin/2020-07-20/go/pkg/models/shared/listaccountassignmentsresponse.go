package shared



type ListAccountAssignmentsResponse struct {
    AccountAssignments []AccountAssignment `json:"AccountAssignments,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

