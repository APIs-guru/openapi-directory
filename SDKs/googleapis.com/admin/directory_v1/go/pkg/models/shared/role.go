package shared

type RoleRolePrivileges struct {
	PrivilegeName *string `json:"privilegeName"`
	ServiceID     *string `json:"serviceId"`
}

type Role struct {
	Etag             *string              `json:"etag"`
	IsSuperAdminRole *bool                `json:"isSuperAdminRole"`
	IsSystemRole     *bool                `json:"isSystemRole"`
	Kind             *string              `json:"kind"`
	RoleDescription  *string              `json:"roleDescription"`
	RoleID           *string              `json:"roleId"`
	RoleName         *string              `json:"roleName"`
	RolePrivileges   []RoleRolePrivileges `json:"rolePrivileges"`
}
