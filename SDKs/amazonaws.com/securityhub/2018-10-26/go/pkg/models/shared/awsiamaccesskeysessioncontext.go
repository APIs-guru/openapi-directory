package shared

type AwsIamAccessKeySessionContext struct {
	Attributes    *AwsIamAccessKeySessionContextAttributes    `json:"Attributes"`
	SessionIssuer *AwsIamAccessKeySessionContextSessionIssuer `json:"SessionIssuer"`
}
