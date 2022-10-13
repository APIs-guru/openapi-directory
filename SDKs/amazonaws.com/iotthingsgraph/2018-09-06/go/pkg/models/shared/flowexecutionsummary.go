package shared

import (
	"time"
)

type FlowExecutionSummary struct {
	CreatedAt        *time.Time               `json:"createdAt"`
	FlowExecutionID  *string                  `json:"flowExecutionId"`
	FlowTemplateID   *string                  `json:"flowTemplateId"`
	Status           *FlowExecutionStatusEnum `json:"status"`
	SystemInstanceID *string                  `json:"systemInstanceId"`
	UpdatedAt        *time.Time               `json:"updatedAt"`
}
