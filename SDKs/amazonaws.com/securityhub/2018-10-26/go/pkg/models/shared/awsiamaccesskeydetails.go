package shared



type AwsIamAccessKeyDetails struct {
    AccessKeyID *string `json:"AccessKeyId,omitempty"`
    AccountID *string `json:"AccountId,omitempty"`
    CreatedAt *string `json:"CreatedAt,omitempty"`
    PrincipalID *string `json:"PrincipalId,omitempty"`
    PrincipalName *string `json:"PrincipalName,omitempty"`
    PrincipalType *string `json:"PrincipalType,omitempty"`
    SessionContext *AwsIamAccessKeySessionContext `json:"SessionContext,omitempty"`
    Status *AwsIamAccessKeyStatusEnum `json:"Status,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    
}

