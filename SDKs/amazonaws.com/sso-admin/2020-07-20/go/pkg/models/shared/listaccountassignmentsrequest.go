package shared

type ListAccountAssignmentsRequest struct {
	AccountID        string  `json:"AccountId"`
	InstanceArn      string  `json:"InstanceArn"`
	MaxResults       *int64  `json:"MaxResults"`
	NextToken        *string `json:"NextToken"`
	PermissionSetArn string  `json:"PermissionSetArn"`
}
