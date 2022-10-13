package shared

import (
	"time"
)

type AutomationExecution struct {
	AssociationID               *string                        `json:"AssociationId"`
	AutomationExecutionID       *string                        `json:"AutomationExecutionId"`
	AutomationExecutionStatus   *AutomationExecutionStatusEnum `json:"AutomationExecutionStatus"`
	AutomationSubtype           *AutomationSubtypeEnum         `json:"AutomationSubtype"`
	ChangeRequestName           *string                        `json:"ChangeRequestName"`
	CurrentAction               *string                        `json:"CurrentAction"`
	CurrentStepName             *string                        `json:"CurrentStepName"`
	DocumentName                *string                        `json:"DocumentName"`
	DocumentVersion             *string                        `json:"DocumentVersion"`
	ExecutedBy                  *string                        `json:"ExecutedBy"`
	ExecutionEndTime            *time.Time                     `json:"ExecutionEndTime"`
	ExecutionStartTime          *time.Time                     `json:"ExecutionStartTime"`
	FailureMessage              *string                        `json:"FailureMessage"`
	MaxConcurrency              *string                        `json:"MaxConcurrency"`
	MaxErrors                   *string                        `json:"MaxErrors"`
	Mode                        *ExecutionModeEnum             `json:"Mode"`
	OpsItemID                   *string                        `json:"OpsItemId"`
	Outputs                     map[string][]string            `json:"Outputs"`
	Parameters                  map[string][]string            `json:"Parameters"`
	ParentAutomationExecutionID *string                        `json:"ParentAutomationExecutionId"`
	ProgressCounters            *ProgressCounters              `json:"ProgressCounters"`
	ResolvedTargets             *ResolvedTargets               `json:"ResolvedTargets"`
	Runbooks                    []Runbook                      `json:"Runbooks"`
	ScheduledTime               *time.Time                     `json:"ScheduledTime"`
	StepExecutions              []StepExecution                `json:"StepExecutions"`
	StepExecutionsTruncated     *bool                          `json:"StepExecutionsTruncated"`
	Target                      *string                        `json:"Target"`
	TargetLocations             []TargetLocation               `json:"TargetLocations"`
	TargetMaps                  []map[string][]string          `json:"TargetMaps"`
	TargetParameterName         *string                        `json:"TargetParameterName"`
	Targets                     []Target                       `json:"Targets"`
}
