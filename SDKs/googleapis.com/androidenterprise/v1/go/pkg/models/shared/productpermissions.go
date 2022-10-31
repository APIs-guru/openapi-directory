package shared

type ProductPermissions struct {
	Permission []ProductPermission `json:"permission,omitempty"`
	ProductID  *string             `json:"productId,omitempty"`
}
