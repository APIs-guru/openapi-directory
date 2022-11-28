package shared

// Permission
// Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.
type Permission struct {
	GranteeID        string               `json:"GranteeId"`
	GranteeType      MemberTypeEnum       `json:"GranteeType"`
	PermissionValues []PermissionTypeEnum `json:"PermissionValues"`
}
