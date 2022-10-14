package shared

type AccessEntry struct {
	AccessMask *string `json:"access_mask,omitempty"`
	AgentRange *string `json:"agent_range,omitempty"`
	User       *string `json:"user,omitempty"`
}
