package shared

type PasswordExpiration struct {
	Enabled        bool   `json:"enabled"`
	MaxPasswordAge *int32 `json:"maxPasswordAge,omitempty"`
}
