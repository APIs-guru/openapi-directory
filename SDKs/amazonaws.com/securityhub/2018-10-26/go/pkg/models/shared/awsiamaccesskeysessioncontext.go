package shared

type AwsIamAccessKeySessionContext struct {
	Attributes    *AwsIamAccessKeySessionContextAttributes    `json:"Attributes,omitempty"`
	SessionIssuer *AwsIamAccessKeySessionContextSessionIssuer `json:"SessionIssuer,omitempty"`
}
