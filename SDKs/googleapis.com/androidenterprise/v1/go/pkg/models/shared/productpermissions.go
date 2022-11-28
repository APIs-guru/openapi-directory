package shared

// ProductPermissions
// Information about the permissions required by a specific app and whether they have been accepted by the enterprise.
type ProductPermissions struct {
	Permission []ProductPermission `json:"permission,omitempty"`
	ProductID  *string             `json:"productId,omitempty"`
}
