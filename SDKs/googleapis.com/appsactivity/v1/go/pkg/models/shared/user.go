package shared

type User struct {
	IsDeleted    *bool   `json:"isDeleted"`
	IsMe         *bool   `json:"isMe"`
	Name         *string `json:"name"`
	PermissionID *string `json:"permissionId"`
	Photo        *Photo  `json:"photo"`
}
