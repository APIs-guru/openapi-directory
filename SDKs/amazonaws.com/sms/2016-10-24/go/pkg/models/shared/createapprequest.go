package shared

type CreateAppRequest struct {
	ClientToken  *string       `json:"clientToken"`
	Description  *string       `json:"description"`
	Name         *string       `json:"name"`
	RoleName     *string       `json:"roleName"`
	ServerGroups []ServerGroup `json:"serverGroups"`
	Tags         []Tag         `json:"tags"`
}
