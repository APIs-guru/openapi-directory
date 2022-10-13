package shared

type ListAccountAssignmentDeletionStatusResponse struct {
	AccountAssignmentsDeletionStatus []AccountAssignmentOperationStatusMetadata `json:"AccountAssignmentsDeletionStatus"`
	NextToken                        *string                                    `json:"NextToken"`
}
