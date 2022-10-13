package shared

type CreateMySQLUser struct {
	Name     *string `json:"name"`
	Password *string `json:"password"`
}
