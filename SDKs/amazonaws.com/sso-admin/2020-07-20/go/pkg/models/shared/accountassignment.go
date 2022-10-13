package shared

type AccountAssignment struct {
	AccountID        *string            `json:"AccountId"`
	PermissionSetArn *string            `json:"PermissionSetArn"`
	PrincipalID      *string            `json:"PrincipalId"`
	PrincipalType    *PrincipalTypeEnum `json:"PrincipalType"`
}
