package shared

// HostHeader
// A host header identifies a web domain.
type HostHeader struct {
	Enabled *bool   `json:"enabled,omitempty"`
	Name    *string `json:"name,omitempty"`
}
