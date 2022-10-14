package shared

type MySQLUser struct {
	Enabled *bool           `json:"enabled,omitempty"`
	Name    *string         `json:"name,omitempty"`
	Rights  *UserRightsEnum `json:"rights,omitempty"`
}
