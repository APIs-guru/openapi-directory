package shared

type ListAccountAssignmentDeletionStatusResponse struct {
	AccountAssignmentsDeletionStatus []AccountAssignmentOperationStatusMetadata `json:"AccountAssignmentsDeletionStatus,omitempty"`
	NextToken                        *string                                    `json:"NextToken,omitempty"`
}
