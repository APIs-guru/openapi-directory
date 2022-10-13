package shared

type AwsIamAccessKeyDetails struct {
	AccessKeyID    *string                        `json:"AccessKeyId"`
	AccountID      *string                        `json:"AccountId"`
	CreatedAt      *string                        `json:"CreatedAt"`
	PrincipalID    *string                        `json:"PrincipalId"`
	PrincipalName  *string                        `json:"PrincipalName"`
	PrincipalType  *string                        `json:"PrincipalType"`
	SessionContext *AwsIamAccessKeySessionContext `json:"SessionContext"`
	Status         *AwsIamAccessKeyStatusEnum     `json:"Status"`
	UserName       *string                        `json:"UserName"`
}
