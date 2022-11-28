package shared

// User
// A representation of a user.
type User struct {
	IsDeleted    *bool   `json:"isDeleted,omitempty"`
	IsMe         *bool   `json:"isMe,omitempty"`
	Name         *string `json:"name,omitempty"`
	PermissionID *string `json:"permissionId,omitempty"`
	Photo        *Photo  `json:"photo,omitempty"`
}
