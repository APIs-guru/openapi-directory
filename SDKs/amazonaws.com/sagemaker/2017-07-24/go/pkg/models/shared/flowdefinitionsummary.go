package shared

import (
	"time"
)

type FlowDefinitionSummary struct {
	CreationTime         time.Time                `json:"CreationTime"`
	FailureReason        *string                  `json:"FailureReason"`
	FlowDefinitionArn    string                   `json:"FlowDefinitionArn"`
	FlowDefinitionName   string                   `json:"FlowDefinitionName"`
	FlowDefinitionStatus FlowDefinitionStatusEnum `json:"FlowDefinitionStatus"`
}
