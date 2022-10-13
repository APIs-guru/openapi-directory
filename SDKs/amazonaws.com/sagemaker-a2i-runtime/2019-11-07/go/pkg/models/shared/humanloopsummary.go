package shared

import (
	"time"
)

type HumanLoopSummary struct {
	CreationTime      *time.Time           `json:"CreationTime"`
	FailureReason     *string              `json:"FailureReason"`
	FlowDefinitionArn *string              `json:"FlowDefinitionArn"`
	HumanLoopName     *string              `json:"HumanLoopName"`
	HumanLoopStatus   *HumanLoopStatusEnum `json:"HumanLoopStatus"`
}
