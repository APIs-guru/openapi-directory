package shared

import (
	"time"
)

type AutomationExecutionMetadata struct {
	AssociationID               *string                        `json:"AssociationId"`
	AutomationExecutionID       *string                        `json:"AutomationExecutionId"`
	AutomationExecutionStatus   *AutomationExecutionStatusEnum `json:"AutomationExecutionStatus"`
	AutomationSubtype           *AutomationSubtypeEnum         `json:"AutomationSubtype"`
	AutomationType              *AutomationTypeEnum            `json:"AutomationType"`
	ChangeRequestName           *string                        `json:"ChangeRequestName"`
	CurrentAction               *string                        `json:"CurrentAction"`
	CurrentStepName             *string                        `json:"CurrentStepName"`
	DocumentName                *string                        `json:"DocumentName"`
	DocumentVersion             *string                        `json:"DocumentVersion"`
	ExecutedBy                  *string                        `json:"ExecutedBy"`
	ExecutionEndTime            *time.Time                     `json:"ExecutionEndTime"`
	ExecutionStartTime          *time.Time                     `json:"ExecutionStartTime"`
	FailureMessage              *string                        `json:"FailureMessage"`
	LogFile                     *string                        `json:"LogFile"`
	MaxConcurrency              *string                        `json:"MaxConcurrency"`
	MaxErrors                   *string                        `json:"MaxErrors"`
	Mode                        *ExecutionModeEnum             `json:"Mode"`
	OpsItemID                   *string                        `json:"OpsItemId"`
	Outputs                     map[string][]string            `json:"Outputs"`
	ParentAutomationExecutionID *string                        `json:"ParentAutomationExecutionId"`
	ResolvedTargets             *ResolvedTargets               `json:"ResolvedTargets"`
	Runbooks                    []Runbook                      `json:"Runbooks"`
	ScheduledTime               *time.Time                     `json:"ScheduledTime"`
	Target                      *string                        `json:"Target"`
	TargetMaps                  []map[string][]string          `json:"TargetMaps"`
	TargetParameterName         *string                        `json:"TargetParameterName"`
	Targets                     []Target                       `json:"Targets"`
}
