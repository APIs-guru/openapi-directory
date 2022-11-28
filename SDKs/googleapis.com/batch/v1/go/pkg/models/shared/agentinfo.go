package shared

type AgentInfoStateEnum string

const (
	AgentInfoStateEnumAgentStateUnspecified AgentInfoStateEnum = "AGENT_STATE_UNSPECIFIED"
	AgentInfoStateEnumAgentStarting         AgentInfoStateEnum = "AGENT_STARTING"
	AgentInfoStateEnumAgentRunning          AgentInfoStateEnum = "AGENT_RUNNING"
	AgentInfoStateEnumAgentStopped          AgentInfoStateEnum = "AGENT_STOPPED"
)

// AgentInfo
// VM Agent Info.
type AgentInfo struct {
	JobID       *string             `json:"jobId,omitempty"`
	ReportTime  *string             `json:"reportTime,omitempty"`
	State       *AgentInfoStateEnum `json:"state,omitempty"`
	TaskGroupID *string             `json:"taskGroupId,omitempty"`
	Tasks       []AgentTaskInfo     `json:"tasks,omitempty"`
}
