package shared

type Permission struct {
	Description  *string `json:"description,omitempty"`
	Name         *string `json:"name,omitempty"`
	PermissionID *string `json:"permissionId,omitempty"`
}
