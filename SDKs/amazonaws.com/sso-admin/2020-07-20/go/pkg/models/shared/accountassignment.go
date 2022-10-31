package shared



type AccountAssignment struct {
    AccountID *string `json:"AccountId,omitempty"`
    PermissionSetArn *string `json:"PermissionSetArn,omitempty"`
    PrincipalID *string `json:"PrincipalId,omitempty"`
    PrincipalType *PrincipalTypeEnum `json:"PrincipalType,omitempty"`
    
}

