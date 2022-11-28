package shared

// CognitoMemberDefinition
// Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.
type CognitoMemberDefinition struct {
	ClientID  string `json:"ClientId"`
	UserGroup string `json:"UserGroup"`
	UserPool  string `json:"UserPool"`
}
