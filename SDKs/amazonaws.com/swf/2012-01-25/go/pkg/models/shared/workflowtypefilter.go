package shared

// WorkflowTypeFilter
// Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.
type WorkflowTypeFilter struct {
	Name    string  `json:"name"`
	Version *string `json:"version,omitempty"`
}
