package shared

type HostHeader struct {
	Enabled *bool   `json:"enabled,omitempty"`
	Name    *string `json:"name,omitempty"`
}
