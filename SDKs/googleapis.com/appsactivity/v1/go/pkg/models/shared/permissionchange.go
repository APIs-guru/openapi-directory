package shared

type PermissionChange struct {
	AddedPermissions   []Permission `json:"addedPermissions"`
	RemovedPermissions []Permission `json:"removedPermissions"`
}
