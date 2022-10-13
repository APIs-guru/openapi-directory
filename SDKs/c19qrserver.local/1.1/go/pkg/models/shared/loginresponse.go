package shared

type LoginResponse struct {
	Admin    *bool   `json:"admin"`
	LoginID  *int64  `json:"login_id"`
	Name     *string `json:"name"`
	ReadOnly *bool   `json:"read_only"`
	Token    *string `json:"token"`
}
