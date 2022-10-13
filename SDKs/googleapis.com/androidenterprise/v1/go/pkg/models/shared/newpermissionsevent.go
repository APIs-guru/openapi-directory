package shared

type NewPermissionsEvent struct {
	ApprovedPermissions  []string `json:"approvedPermissions"`
	ProductID            *string  `json:"productId"`
	RequestedPermissions []string `json:"requestedPermissions"`
}
