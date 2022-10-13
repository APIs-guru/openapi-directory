package shared

type DescribePermissionSetProvisioningStatusRequest struct {
	InstanceArn                     string `json:"InstanceArn"`
	ProvisionPermissionSetRequestID string `json:"ProvisionPermissionSetRequestId"`
}
