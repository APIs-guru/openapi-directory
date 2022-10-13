package shared

type GroupEntity struct {
	AdminIds  *string  `json:"admin_ids"`
	ID        *int32   `json:"id"`
	Name      *string  `json:"name"`
	Notes     *string  `json:"notes"`
	UserIds   []int32  `json:"user_ids"`
	Usernames []string `json:"usernames"`
}
