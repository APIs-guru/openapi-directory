package shared

type WorkflowUsageBillableMacos struct {
	TotalMs *int64 `json:"total_ms"`
}

type WorkflowUsageBillableUbuntu struct {
	TotalMs *int64 `json:"total_ms"`
}

type WorkflowUsageBillableWindows struct {
	TotalMs *int64 `json:"total_ms"`
}

type WorkflowUsageBillable struct {
	Macos   *WorkflowUsageBillableMacos   `json:"MACOS"`
	Ubuntu  *WorkflowUsageBillableUbuntu  `json:"UBUNTU"`
	Windows *WorkflowUsageBillableWindows `json:"WINDOWS"`
}

type WorkflowUsage struct {
	Billable WorkflowUsageBillable `json:"billable"`
}
