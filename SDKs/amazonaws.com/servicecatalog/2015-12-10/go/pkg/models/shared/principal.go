package shared

type Principal struct {
	PrincipalArn  *string            `json:"PrincipalARN,omitempty"`
	PrincipalType *PrincipalTypeEnum `json:"PrincipalType,omitempty"`
}
