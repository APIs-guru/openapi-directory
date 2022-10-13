package shared

type CreateAccountAssignmentRequest struct {
	InstanceArn      string            `json:"InstanceArn"`
	PermissionSetArn string            `json:"PermissionSetArn"`
	PrincipalID      string            `json:"PrincipalId"`
	PrincipalType    PrincipalTypeEnum `json:"PrincipalType"`
	TargetID         string            `json:"TargetId"`
	TargetType       TargetTypeEnum    `json:"TargetType"`
}
