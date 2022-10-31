package shared

type PutInlinePolicyToPermissionSetRequest struct {
	InlinePolicy     string `json:"InlinePolicy"`
	InstanceArn      string `json:"InstanceArn"`
	PermissionSetArn string `json:"PermissionSetArn"`
}
