package shared

type WorkflowUsageBillableMacos struct {
	TotalMs *int64 `json:"total_ms,omitempty"`
}

type WorkflowUsageBillableUbuntu struct {
	TotalMs *int64 `json:"total_ms,omitempty"`
}

type WorkflowUsageBillableWindows struct {
	TotalMs *int64 `json:"total_ms,omitempty"`
}

type WorkflowUsageBillable struct {
	Macos   *WorkflowUsageBillableMacos   `json:"MACOS,omitempty"`
	Ubuntu  *WorkflowUsageBillableUbuntu  `json:"UBUNTU,omitempty"`
	Windows *WorkflowUsageBillableWindows `json:"WINDOWS,omitempty"`
}

type WorkflowUsage struct {
	Billable WorkflowUsageBillable `json:"billable"`
}
