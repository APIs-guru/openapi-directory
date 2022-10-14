package shared

import (
	"time"
)

type DescribeFlowDefinitionResponse struct {
	CreationTime              time.Time                  `json:"CreationTime"`
	FailureReason             *string                    `json:"FailureReason,omitempty"`
	FlowDefinitionArn         string                     `json:"FlowDefinitionArn"`
	FlowDefinitionName        string                     `json:"FlowDefinitionName"`
	FlowDefinitionStatus      FlowDefinitionStatusEnum   `json:"FlowDefinitionStatus"`
	HumanLoopActivationConfig *HumanLoopActivationConfig `json:"HumanLoopActivationConfig,omitempty"`
	HumanLoopConfig           HumanLoopConfig            `json:"HumanLoopConfig"`
	HumanLoopRequestSource    *HumanLoopRequestSource    `json:"HumanLoopRequestSource,omitempty"`
	OutputConfig              FlowDefinitionOutputConfig `json:"OutputConfig"`
	RoleArn                   string                     `json:"RoleArn"`
}
