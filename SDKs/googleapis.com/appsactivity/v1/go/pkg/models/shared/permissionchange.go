package shared

// PermissionChange
// Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.
type PermissionChange struct {
	AddedPermissions   []Permission `json:"addedPermissions,omitempty"`
	RemovedPermissions []Permission `json:"removedPermissions,omitempty"`
}
