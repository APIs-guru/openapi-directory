package shared

type MemberModel struct {
	Email             *string `json:"email"`
	FullName          *string `json:"fullName"`
	PermissionGroupID *int64  `json:"permissionGroupId"`
	ProductID         *string `json:"productId"`
	UserID            *string `json:"userId"`
}
