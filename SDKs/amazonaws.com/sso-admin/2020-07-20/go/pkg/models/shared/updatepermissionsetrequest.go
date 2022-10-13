package shared

type UpdatePermissionSetRequest struct {
	Description      *string `json:"Description"`
	InstanceArn      string  `json:"InstanceArn"`
	PermissionSetArn string  `json:"PermissionSetArn"`
	RelayState       *string `json:"RelayState"`
	SessionDuration  *string `json:"SessionDuration"`
}
