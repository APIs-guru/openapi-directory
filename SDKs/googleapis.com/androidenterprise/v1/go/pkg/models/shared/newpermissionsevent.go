package shared

// NewPermissionsEvent
// An event generated when new permissions are added to an app.
type NewPermissionsEvent struct {
	ApprovedPermissions  []string `json:"approvedPermissions,omitempty"`
	ProductID            *string  `json:"productId,omitempty"`
	RequestedPermissions []string `json:"requestedPermissions,omitempty"`
}
