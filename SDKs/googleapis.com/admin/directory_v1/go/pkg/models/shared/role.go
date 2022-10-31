package shared

type RoleRolePrivileges struct {
	PrivilegeName *string `json:"privilegeName,omitempty"`
	ServiceID     *string `json:"serviceId,omitempty"`
}

type Role struct {
	Etag             *string              `json:"etag,omitempty"`
	IsSuperAdminRole *bool                `json:"isSuperAdminRole,omitempty"`
	IsSystemRole     *bool                `json:"isSystemRole,omitempty"`
	Kind             *string              `json:"kind,omitempty"`
	RoleDescription  *string              `json:"roleDescription,omitempty"`
	RoleID           *string              `json:"roleId,omitempty"`
	RoleName         *string              `json:"roleName,omitempty"`
	RolePrivileges   []RoleRolePrivileges `json:"rolePrivileges,omitempty"`
}
