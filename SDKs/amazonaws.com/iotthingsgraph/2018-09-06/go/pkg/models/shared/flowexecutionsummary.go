package shared

import (
	"time"
)

// FlowExecutionSummary
// An object that contains summary information about a flow execution.
type FlowExecutionSummary struct {
	CreatedAt        *time.Time               `json:"createdAt,omitempty"`
	FlowExecutionID  *string                  `json:"flowExecutionId,omitempty"`
	FlowTemplateID   *string                  `json:"flowTemplateId,omitempty"`
	Status           *FlowExecutionStatusEnum `json:"status,omitempty"`
	SystemInstanceID *string                  `json:"systemInstanceId,omitempty"`
	UpdatedAt        *time.Time               `json:"updatedAt,omitempty"`
}
