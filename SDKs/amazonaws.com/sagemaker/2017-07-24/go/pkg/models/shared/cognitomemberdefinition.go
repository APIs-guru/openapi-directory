package shared

type CognitoMemberDefinition struct {
	ClientID  string `json:"ClientId"`
	UserGroup string `json:"UserGroup"`
	UserPool  string `json:"UserPool"`
}
