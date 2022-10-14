package shared

type AgentState struct {
	AgentNum *int32 `json:"agentNum,omitempty"`
	State    *int32 `json:"state,omitempty"`
}
