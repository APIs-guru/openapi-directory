package shared

type ItvFeatureFlag struct {
	Enabled bool    `json:"enabled"`
	Flag    *string `json:"flag,omitempty"`
}
