package shared

type ListPermissionSetProvisioningStatusResponse struct {
	NextToken                        *string                                   `json:"NextToken,omitempty"`
	PermissionSetsProvisioningStatus []PermissionSetProvisioningStatusMetadata `json:"PermissionSetsProvisioningStatus,omitempty"`
}
