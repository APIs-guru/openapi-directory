package shared

type GroupUserEntity struct {
	Admin     *bool    `json:"admin"`
	GroupID   *int32   `json:"group_id"`
	GroupName *string  `json:"group_name"`
	UserID    *int32   `json:"user_id"`
	Usernames []string `json:"usernames"`
}
