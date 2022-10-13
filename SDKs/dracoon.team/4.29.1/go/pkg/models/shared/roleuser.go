package shared

type RoleUser struct {
	DisplayName string   `json:"displayName"`
	ID          int64    `json:"id"`
	IsMember    bool     `json:"isMember"`
	UserInfo    UserInfo `json:"userInfo"`
}
