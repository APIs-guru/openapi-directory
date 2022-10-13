package shared

type UpdateAppRequest struct {
	AppID        *string       `json:"appId"`
	Description  *string       `json:"description"`
	Name         *string       `json:"name"`
	RoleName     *string       `json:"roleName"`
	ServerGroups []ServerGroup `json:"serverGroups"`
	Tags         []Tag         `json:"tags"`
}
