package shared

type AccessEntry struct {
	AccessMask *string `json:"access_mask"`
	AgentRange *string `json:"agent_range"`
	User       *string `json:"user"`
}
