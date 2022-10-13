package shared

import (
	"time"
)

type DescribeHumanLoopResponse struct {
	CreationTime      time.Time           `json:"CreationTime"`
	FailureCode       *string             `json:"FailureCode"`
	FailureReason     *string             `json:"FailureReason"`
	FlowDefinitionArn string              `json:"FlowDefinitionArn"`
	HumanLoopArn      string              `json:"HumanLoopArn"`
	HumanLoopName     string              `json:"HumanLoopName"`
	HumanLoopOutput   *HumanLoopOutput    `json:"HumanLoopOutput"`
	HumanLoopStatus   HumanLoopStatusEnum `json:"HumanLoopStatus"`
}
