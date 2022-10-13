package shared

type MemberDefinition struct {
	CognitoMemberDefinition *CognitoMemberDefinition `json:"CognitoMemberDefinition"`
	OidcMemberDefinition    *OidcMemberDefinition    `json:"OidcMemberDefinition"`
}
