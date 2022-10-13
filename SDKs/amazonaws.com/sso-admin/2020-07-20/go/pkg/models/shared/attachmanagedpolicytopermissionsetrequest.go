package shared

type AttachManagedPolicyToPermissionSetRequest struct {
	InstanceArn      string `json:"InstanceArn"`
	ManagedPolicyArn string `json:"ManagedPolicyArn"`
	PermissionSetArn string `json:"PermissionSetArn"`
}
