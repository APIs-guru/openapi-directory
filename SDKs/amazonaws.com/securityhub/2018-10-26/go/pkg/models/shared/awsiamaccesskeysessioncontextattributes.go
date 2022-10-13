package shared

type AwsIamAccessKeySessionContextAttributes struct {
	CreationDate     *string `json:"CreationDate"`
	MfaAuthenticated *bool   `json:"MfaAuthenticated"`
}
