package shared

type ProductPermissions struct {
	Permission []ProductPermission `json:"permission"`
	ProductID  *string             `json:"productId"`
}
