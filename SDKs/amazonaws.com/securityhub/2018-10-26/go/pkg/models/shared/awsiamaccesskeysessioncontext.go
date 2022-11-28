package shared

// AwsIamAccessKeySessionContext
// Provides information about the session that the key was used for.
type AwsIamAccessKeySessionContext struct {
	Attributes    *AwsIamAccessKeySessionContextAttributes    `json:"Attributes,omitempty"`
	SessionIssuer *AwsIamAccessKeySessionContextSessionIssuer `json:"SessionIssuer,omitempty"`
}
