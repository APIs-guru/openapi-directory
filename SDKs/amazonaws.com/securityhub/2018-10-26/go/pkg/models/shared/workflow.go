package shared

// Workflow
// Provides information about the status of the investigation into a finding.
type Workflow struct {
	Status *WorkflowStatusEnum `json:"Status,omitempty"`
}
