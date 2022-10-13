package shared

type UserRecord struct {
	Admin    *bool   `json:"admin"`
	Email    *string `json:"email"`
	ID       *int64  `json:"id"`
	Name     *string `json:"name"`
	ReadOnly *bool   `json:"read_only"`
}
