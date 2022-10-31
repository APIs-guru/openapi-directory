package shared

import (
	"time"
)

type DescribeHumanLoopResponse struct {
	CreationTime      time.Time           `json:"CreationTime"`
	FailureCode       *string             `json:"FailureCode,omitempty"`
	FailureReason     *string             `json:"FailureReason,omitempty"`
	FlowDefinitionArn string              `json:"FlowDefinitionArn"`
	HumanLoopArn      string              `json:"HumanLoopArn"`
	HumanLoopName     string              `json:"HumanLoopName"`
	HumanLoopOutput   *HumanLoopOutput    `json:"HumanLoopOutput,omitempty"`
	HumanLoopStatus   HumanLoopStatusEnum `json:"HumanLoopStatus"`
}
