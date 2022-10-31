package shared

type UserGroup struct {
	ID       int64  `json:"id"`
	IsMember bool   `json:"isMember"`
	Name     string `json:"name"`
}
