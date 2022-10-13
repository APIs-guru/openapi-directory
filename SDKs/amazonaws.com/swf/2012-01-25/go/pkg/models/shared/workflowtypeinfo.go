package shared

import (
	"time"
)

type WorkflowTypeInfo struct {
	CreationDate    time.Time              `json:"creationDate"`
	DeprecationDate *time.Time             `json:"deprecationDate"`
	Description     *string                `json:"description"`
	Status          RegistrationStatusEnum `json:"status"`
	WorkflowType    WorkflowType           `json:"workflowType"`
}
