package shared



type FederatedUser struct {
    AccessKeyID *string `json:"accessKeyId,omitempty"`
    AccountID *string `json:"accountId,omitempty"`
    Arn *string `json:"arn,omitempty"`
    PrincipalID *string `json:"principalId,omitempty"`
    SessionContext *SessionContext `json:"sessionContext,omitempty"`
    
}

