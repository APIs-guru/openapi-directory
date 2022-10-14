package shared

type UpdateAppRequest struct {
	AppID        *string       `json:"appId,omitempty"`
	Description  *string       `json:"description,omitempty"`
	Name         *string       `json:"name,omitempty"`
	RoleName     *string       `json:"roleName,omitempty"`
	ServerGroups []ServerGroup `json:"serverGroups,omitempty"`
	Tags         []Tag         `json:"tags,omitempty"`
}
