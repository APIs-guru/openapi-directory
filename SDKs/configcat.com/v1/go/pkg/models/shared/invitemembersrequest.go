package shared

type InviteMembersRequest struct {
	Emails            []string `json:"emails"`
	PermissionGroupID int64    `json:"permissionGroupId"`
}
