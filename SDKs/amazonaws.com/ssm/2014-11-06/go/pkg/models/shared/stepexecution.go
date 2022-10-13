package shared

import (
	"time"
)

type StepExecution struct {
	Action               *string                        `json:"Action"`
	ExecutionEndTime     *time.Time                     `json:"ExecutionEndTime"`
	ExecutionStartTime   *time.Time                     `json:"ExecutionStartTime"`
	FailureDetails       *FailureDetails                `json:"FailureDetails"`
	FailureMessage       *string                        `json:"FailureMessage"`
	Inputs               map[string]string              `json:"Inputs"`
	IsCritical           *bool                          `json:"IsCritical"`
	IsEnd                *bool                          `json:"IsEnd"`
	MaxAttempts          *int64                         `json:"MaxAttempts"`
	NextStep             *string                        `json:"NextStep"`
	OnFailure            *string                        `json:"OnFailure"`
	Outputs              map[string][]string            `json:"Outputs"`
	OverriddenParameters map[string][]string            `json:"OverriddenParameters"`
	Response             *string                        `json:"Response"`
	ResponseCode         *string                        `json:"ResponseCode"`
	StepExecutionID      *string                        `json:"StepExecutionId"`
	StepName             *string                        `json:"StepName"`
	StepStatus           *AutomationExecutionStatusEnum `json:"StepStatus"`
	TargetLocation       *TargetLocation                `json:"TargetLocation"`
	Targets              []Target                       `json:"Targets"`
	TimeoutSeconds       *int64                         `json:"TimeoutSeconds"`
	ValidNextSteps       []string                       `json:"ValidNextSteps"`
}
