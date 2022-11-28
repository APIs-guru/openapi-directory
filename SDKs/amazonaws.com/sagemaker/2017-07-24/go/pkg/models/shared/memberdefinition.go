package shared

// MemberDefinition
// Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
type MemberDefinition struct {
	CognitoMemberDefinition *CognitoMemberDefinition `json:"CognitoMemberDefinition,omitempty"`
	OidcMemberDefinition    *OidcMemberDefinition    `json:"OidcMemberDefinition,omitempty"`
}
