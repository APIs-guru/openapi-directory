package shared

import (
	"time"
)

// WorkflowTypeInfo
// Contains information about a workflow type.
type WorkflowTypeInfo struct {
	CreationDate    time.Time              `json:"creationDate"`
	DeprecationDate *time.Time             `json:"deprecationDate,omitempty"`
	Description     *string                `json:"description,omitempty"`
	Status          RegistrationStatusEnum `json:"status"`
	WorkflowType    WorkflowType           `json:"workflowType"`
}
