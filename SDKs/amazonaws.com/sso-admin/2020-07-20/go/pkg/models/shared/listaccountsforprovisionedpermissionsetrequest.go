package shared

type ListAccountsForProvisionedPermissionSetRequest struct {
	InstanceArn        string                  `json:"InstanceArn"`
	MaxResults         *int64                  `json:"MaxResults"`
	NextToken          *string                 `json:"NextToken"`
	PermissionSetArn   string                  `json:"PermissionSetArn"`
	ProvisioningStatus *ProvisioningStatusEnum `json:"ProvisioningStatus"`
}
