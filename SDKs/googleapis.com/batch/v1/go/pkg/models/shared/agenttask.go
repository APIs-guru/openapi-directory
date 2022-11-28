package shared

type AgentTaskIntendedStateEnum string

const (
	AgentTaskIntendedStateEnumIntendedStateUnspecified AgentTaskIntendedStateEnum = "INTENDED_STATE_UNSPECIFIED"
	AgentTaskIntendedStateEnumAssigned                 AgentTaskIntendedStateEnum = "ASSIGNED"
	AgentTaskIntendedStateEnumCancelled                AgentTaskIntendedStateEnum = "CANCELLED"
	AgentTaskIntendedStateEnumDeleted                  AgentTaskIntendedStateEnum = "DELETED"
)

// AgentTask
// TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.
type AgentTask struct {
	IntendedState  *AgentTaskIntendedStateEnum `json:"intendedState,omitempty"`
	ReachedBarrier *string                     `json:"reachedBarrier,omitempty"`
	Spec           *TaskSpec                   `json:"spec,omitempty"`
	Status         *TaskStatus                 `json:"status,omitempty"`
	Task           *string                     `json:"task,omitempty"`
}
