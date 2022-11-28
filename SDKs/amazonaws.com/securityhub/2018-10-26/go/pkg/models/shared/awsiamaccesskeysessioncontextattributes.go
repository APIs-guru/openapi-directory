package shared

// AwsIamAccessKeySessionContextAttributes
// Attributes of the session that the key was used for.
type AwsIamAccessKeySessionContextAttributes struct {
	CreationDate     *string `json:"CreationDate,omitempty"`
	MfaAuthenticated *bool   `json:"MfaAuthenticated,omitempty"`
}
