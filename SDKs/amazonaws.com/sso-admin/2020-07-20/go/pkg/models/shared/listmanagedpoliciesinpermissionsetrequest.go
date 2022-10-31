package shared

type ListManagedPoliciesInPermissionSetRequest struct {
	InstanceArn      string  `json:"InstanceArn"`
	MaxResults       *int64  `json:"MaxResults,omitempty"`
	NextToken        *string `json:"NextToken,omitempty"`
	PermissionSetArn string  `json:"PermissionSetArn"`
}
