package shared

type Principal struct {
	PrincipalArn  *string            `json:"PrincipalARN"`
	PrincipalType *PrincipalTypeEnum `json:"PrincipalType"`
}
