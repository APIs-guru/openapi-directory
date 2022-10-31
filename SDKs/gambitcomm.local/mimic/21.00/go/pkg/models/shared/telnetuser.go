package shared

type TelnetUser struct {
	Groups      []string `json:"groups,omitempty"`
	HasPassword *int32   `json:"hasPassword,omitempty"`
	Password    *string  `json:"password,omitempty"`
	Username    *string  `json:"username,omitempty"`
}
