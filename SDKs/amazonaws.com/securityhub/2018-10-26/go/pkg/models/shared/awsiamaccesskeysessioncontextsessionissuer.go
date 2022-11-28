package shared

// AwsIamAccessKeySessionContextSessionIssuer
// Information about the entity that created the session.
type AwsIamAccessKeySessionContextSessionIssuer struct {
	AccountID   *string `json:"AccountId,omitempty"`
	Arn         *string `json:"Arn,omitempty"`
	PrincipalID *string `json:"PrincipalId,omitempty"`
	Type        *string `json:"Type,omitempty"`
	UserName    *string `json:"UserName,omitempty"`
}
