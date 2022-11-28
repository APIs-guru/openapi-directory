package shared

// ReportAgentStateRequest
// Request to report agent's state. The Request itself implies the agent is healthy.
type ReportAgentStateRequest struct {
	AgentInfo *AgentInfo     `json:"agentInfo,omitempty"`
	Metadata  *AgentMetadata `json:"metadata,omitempty"`
}
