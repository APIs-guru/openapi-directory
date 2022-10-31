package shared



type SessionIssuer struct {
    AccountID *string `json:"accountId,omitempty"`
    Arn *string `json:"arn,omitempty"`
    PrincipalID *string `json:"principalId,omitempty"`
    Type *string `json:"type,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

