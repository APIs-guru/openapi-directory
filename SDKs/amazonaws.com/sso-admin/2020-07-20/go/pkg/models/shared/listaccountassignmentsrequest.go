package shared

type ListAccountAssignmentsRequest struct {
	AccountID        string  `json:"AccountId"`
	InstanceArn      string  `json:"InstanceArn"`
	MaxResults       *int64  `json:"MaxResults,omitempty"`
	NextToken        *string `json:"NextToken,omitempty"`
	PermissionSetArn string  `json:"PermissionSetArn"`
}
