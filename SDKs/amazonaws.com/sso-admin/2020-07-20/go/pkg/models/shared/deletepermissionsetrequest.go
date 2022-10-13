package shared

type DeletePermissionSetRequest struct {
	InstanceArn      string `json:"InstanceArn"`
	PermissionSetArn string `json:"PermissionSetArn"`
}
