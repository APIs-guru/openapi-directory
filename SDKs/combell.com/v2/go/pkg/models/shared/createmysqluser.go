package shared

type CreateMySQLUser struct {
	Name     *string `json:"name,omitempty"`
	Password *string `json:"password,omitempty"`
}
