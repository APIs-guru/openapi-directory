package shared



type MemberModel struct {
    Email *string `json:"email,omitempty"`
    FullName *string `json:"fullName,omitempty"`
    PermissionGroupID *int64 `json:"permissionGroupId,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

