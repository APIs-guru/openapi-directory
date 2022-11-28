package shared

// TaskGroupInput
// A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
type TaskGroupInput struct {
	Parallelism      *string       `json:"parallelism,omitempty"`
	PermissiveSSH    *bool         `json:"permissiveSsh,omitempty"`
	RequireHostsFile *bool         `json:"requireHostsFile,omitempty"`
	TaskCount        *string       `json:"taskCount,omitempty"`
	TaskCountPerNode *string       `json:"taskCountPerNode,omitempty"`
	TaskEnvironments []Environment `json:"taskEnvironments,omitempty"`
	TaskSpec         *TaskSpec     `json:"taskSpec,omitempty"`
}

// TaskGroup
// A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
type TaskGroup struct {
	Name             *string       `json:"name,omitempty"`
	Parallelism      *string       `json:"parallelism,omitempty"`
	PermissiveSSH    *bool         `json:"permissiveSsh,omitempty"`
	RequireHostsFile *bool         `json:"requireHostsFile,omitempty"`
	TaskCount        *string       `json:"taskCount,omitempty"`
	TaskCountPerNode *string       `json:"taskCountPerNode,omitempty"`
	TaskEnvironments []Environment `json:"taskEnvironments,omitempty"`
	TaskSpec         *TaskSpec     `json:"taskSpec,omitempty"`
}
