package shared

// AgentVersion
// Edge Manager agent version.
type AgentVersion struct {
	AgentCount int64  `json:"AgentCount"`
	Version    string `json:"Version"`
}
