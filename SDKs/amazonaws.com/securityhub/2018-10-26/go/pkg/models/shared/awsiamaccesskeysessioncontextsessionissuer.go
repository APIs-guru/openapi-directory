package shared

type AwsIamAccessKeySessionContextSessionIssuer struct {
	AccountID   *string `json:"AccountId"`
	Arn         *string `json:"Arn"`
	PrincipalID *string `json:"PrincipalId"`
	Type        *string `json:"Type"`
	UserName    *string `json:"UserName"`
}
