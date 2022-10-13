package shared

type ListAccountAssignmentCreationStatusResponse struct {
	AccountAssignmentsCreationStatus []AccountAssignmentOperationStatusMetadata `json:"AccountAssignmentsCreationStatus"`
	NextToken                        *string                                    `json:"NextToken"`
}
