package shared

// Nameserver
// Nameserver includes the following elements.
type Nameserver struct {
	GlueIps []string `json:"GlueIps,omitempty"`
	Name    string   `json:"Name"`
}
