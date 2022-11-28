package shared

// AccountAssignment
// <p>The assignment that indicates a principal's limited access to a specified Amazon Web Services account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note>
type AccountAssignment struct {
	AccountID        *string            `json:"AccountId,omitempty"`
	PermissionSetArn *string            `json:"PermissionSetArn,omitempty"`
	PrincipalID      *string            `json:"PrincipalId,omitempty"`
	PrincipalType    *PrincipalTypeEnum `json:"PrincipalType,omitempty"`
}
