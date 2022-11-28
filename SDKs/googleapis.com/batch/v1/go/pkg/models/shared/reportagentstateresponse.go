package shared

// ReportAgentStateResponse
// Response to ReportAgentStateRequest.
type ReportAgentStateResponse struct {
	Tasks []AgentTask `json:"tasks,omitempty"`
}
