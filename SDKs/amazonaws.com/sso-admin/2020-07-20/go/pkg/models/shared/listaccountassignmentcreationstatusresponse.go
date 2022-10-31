package shared



type ListAccountAssignmentCreationStatusResponse struct {
    AccountAssignmentsCreationStatus []AccountAssignmentOperationStatusMetadata `json:"AccountAssignmentsCreationStatus,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

