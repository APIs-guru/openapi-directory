package shared

type NewPermissionsEvent struct {
	ApprovedPermissions  []string `json:"approvedPermissions,omitempty"`
	ProductID            *string  `json:"productId,omitempty"`
	RequestedPermissions []string `json:"requestedPermissions,omitempty"`
}
