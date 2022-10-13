package shared

type TelnetUser struct {
	Groups      []string `json:"groups"`
	HasPassword *int32   `json:"hasPassword"`
	Password    *string  `json:"password"`
	Username    *string  `json:"username"`
}
