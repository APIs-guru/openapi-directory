package shared

type MemberDefinition struct {
	CognitoMemberDefinition *CognitoMemberDefinition `json:"CognitoMemberDefinition,omitempty"`
	OidcMemberDefinition    *OidcMemberDefinition    `json:"OidcMemberDefinition,omitempty"`
}
