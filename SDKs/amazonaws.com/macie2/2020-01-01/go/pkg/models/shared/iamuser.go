package shared



type IamUser struct {
    AccountID *string `json:"accountId,omitempty"`
    Arn *string `json:"arn,omitempty"`
    PrincipalID *string `json:"principalId,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

