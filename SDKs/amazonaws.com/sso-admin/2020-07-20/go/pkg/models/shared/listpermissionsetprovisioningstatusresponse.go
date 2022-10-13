package shared

type ListPermissionSetProvisioningStatusResponse struct {
	NextToken                        *string                                   `json:"NextToken"`
	PermissionSetsProvisioningStatus []PermissionSetProvisioningStatusMetadata `json:"PermissionSetsProvisioningStatus"`
}
