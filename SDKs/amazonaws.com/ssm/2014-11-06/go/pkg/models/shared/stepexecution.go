package shared

import (
	"time"
)

type StepExecution struct {
	Action               *string                        `json:"Action,omitempty"`
	ExecutionEndTime     *time.Time                     `json:"ExecutionEndTime,omitempty"`
	ExecutionStartTime   *time.Time                     `json:"ExecutionStartTime,omitempty"`
	FailureDetails       *FailureDetails                `json:"FailureDetails,omitempty"`
	FailureMessage       *string                        `json:"FailureMessage,omitempty"`
	Inputs               map[string]string              `json:"Inputs,omitempty"`
	IsCritical           *bool                          `json:"IsCritical,omitempty"`
	IsEnd                *bool                          `json:"IsEnd,omitempty"`
	MaxAttempts          *int64                         `json:"MaxAttempts,omitempty"`
	NextStep             *string                        `json:"NextStep,omitempty"`
	OnFailure            *string                        `json:"OnFailure,omitempty"`
	Outputs              map[string][]string            `json:"Outputs,omitempty"`
	OverriddenParameters map[string][]string            `json:"OverriddenParameters,omitempty"`
	Response             *string                        `json:"Response,omitempty"`
	ResponseCode         *string                        `json:"ResponseCode,omitempty"`
	StepExecutionID      *string                        `json:"StepExecutionId,omitempty"`
	StepName             *string                        `json:"StepName,omitempty"`
	StepStatus           *AutomationExecutionStatusEnum `json:"StepStatus,omitempty"`
	TargetLocation       *TargetLocation                `json:"TargetLocation,omitempty"`
	Targets              []Target                       `json:"Targets,omitempty"`
	TimeoutSeconds       *int64                         `json:"TimeoutSeconds,omitempty"`
	ValidNextSteps       []string                       `json:"ValidNextSteps,omitempty"`
}
