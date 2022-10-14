package shared

import (
	"time"
)

type AutomationExecutionMetadata struct {
	AssociationID               *string                        `json:"AssociationId,omitempty"`
	AutomationExecutionID       *string                        `json:"AutomationExecutionId,omitempty"`
	AutomationExecutionStatus   *AutomationExecutionStatusEnum `json:"AutomationExecutionStatus,omitempty"`
	AutomationSubtype           *AutomationSubtypeEnum         `json:"AutomationSubtype,omitempty"`
	AutomationType              *AutomationTypeEnum            `json:"AutomationType,omitempty"`
	ChangeRequestName           *string                        `json:"ChangeRequestName,omitempty"`
	CurrentAction               *string                        `json:"CurrentAction,omitempty"`
	CurrentStepName             *string                        `json:"CurrentStepName,omitempty"`
	DocumentName                *string                        `json:"DocumentName,omitempty"`
	DocumentVersion             *string                        `json:"DocumentVersion,omitempty"`
	ExecutedBy                  *string                        `json:"ExecutedBy,omitempty"`
	ExecutionEndTime            *time.Time                     `json:"ExecutionEndTime,omitempty"`
	ExecutionStartTime          *time.Time                     `json:"ExecutionStartTime,omitempty"`
	FailureMessage              *string                        `json:"FailureMessage,omitempty"`
	LogFile                     *string                        `json:"LogFile,omitempty"`
	MaxConcurrency              *string                        `json:"MaxConcurrency,omitempty"`
	MaxErrors                   *string                        `json:"MaxErrors,omitempty"`
	Mode                        *ExecutionModeEnum             `json:"Mode,omitempty"`
	OpsItemID                   *string                        `json:"OpsItemId,omitempty"`
	Outputs                     map[string][]string            `json:"Outputs,omitempty"`
	ParentAutomationExecutionID *string                        `json:"ParentAutomationExecutionId,omitempty"`
	ResolvedTargets             *ResolvedTargets               `json:"ResolvedTargets,omitempty"`
	Runbooks                    []Runbook                      `json:"Runbooks,omitempty"`
	ScheduledTime               *time.Time                     `json:"ScheduledTime,omitempty"`
	Target                      *string                        `json:"Target,omitempty"`
	TargetMaps                  []map[string][]string          `json:"TargetMaps,omitempty"`
	TargetParameterName         *string                        `json:"TargetParameterName,omitempty"`
	Targets                     []Target                       `json:"Targets,omitempty"`
}
