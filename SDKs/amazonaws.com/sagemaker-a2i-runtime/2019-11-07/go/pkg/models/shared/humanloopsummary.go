package shared

import (
	"time"
)

// HumanLoopSummary
// Summary information about the human loop.
type HumanLoopSummary struct {
	CreationTime      *time.Time           `json:"CreationTime,omitempty"`
	FailureReason     *string              `json:"FailureReason,omitempty"`
	FlowDefinitionArn *string              `json:"FlowDefinitionArn,omitempty"`
	HumanLoopName     *string              `json:"HumanLoopName,omitempty"`
	HumanLoopStatus   *HumanLoopStatusEnum `json:"HumanLoopStatus,omitempty"`
}
