package shared

// Principal
// Information about a principal.
type Principal struct {
	PrincipalArn  *string            `json:"PrincipalARN,omitempty"`
	PrincipalType *PrincipalTypeEnum `json:"PrincipalType,omitempty"`
}
