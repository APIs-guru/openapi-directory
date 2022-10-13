package shared

type MySQLUser struct {
	Enabled *bool           `json:"enabled"`
	Name    *string         `json:"name"`
	Rights  *UserRightsEnum `json:"rights"`
}
