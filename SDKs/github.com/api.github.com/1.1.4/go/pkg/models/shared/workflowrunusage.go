package shared

type WorkflowRunUsageBillableMacos struct {
	Jobs    int64 `json:"jobs"`
	TotalMs int64 `json:"total_ms"`
}

type WorkflowRunUsageBillableUbuntu struct {
	Jobs    int64 `json:"jobs"`
	TotalMs int64 `json:"total_ms"`
}

type WorkflowRunUsageBillableWindows struct {
	Jobs    int64 `json:"jobs"`
	TotalMs int64 `json:"total_ms"`
}

type WorkflowRunUsageBillable struct {
	Macos   *WorkflowRunUsageBillableMacos   `json:"MACOS,omitempty"`
	Ubuntu  *WorkflowRunUsageBillableUbuntu  `json:"UBUNTU,omitempty"`
	Windows *WorkflowRunUsageBillableWindows `json:"WINDOWS,omitempty"`
}

type WorkflowRunUsage struct {
	Billable      WorkflowRunUsageBillable `json:"billable"`
	RunDurationMs int64                    `json:"run_duration_ms"`
}
