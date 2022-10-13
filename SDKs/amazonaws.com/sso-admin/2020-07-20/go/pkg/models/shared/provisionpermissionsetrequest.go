package shared

type ProvisionPermissionSetRequest struct {
	InstanceArn      string                  `json:"InstanceArn"`
	PermissionSetArn string                  `json:"PermissionSetArn"`
	TargetID         *string                 `json:"TargetId"`
	TargetType       ProvisionTargetTypeEnum `json:"TargetType"`
}
