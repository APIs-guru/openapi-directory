package shared

// WorkflowTypeDetail
// Contains details about a workflow type.
type WorkflowTypeDetail struct {
	Configuration WorkflowTypeConfiguration `json:"configuration"`
	TypeInfo      WorkflowTypeInfo          `json:"typeInfo"`
}
