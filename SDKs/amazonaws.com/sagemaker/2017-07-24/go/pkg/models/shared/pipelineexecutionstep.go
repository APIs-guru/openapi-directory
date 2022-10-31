package shared

import (
	"time"
)

type PipelineExecutionStep struct {
	CacheHitResult *CacheHitResult                `json:"CacheHitResult,omitempty"`
	EndTime        *time.Time                     `json:"EndTime,omitempty"`
	FailureReason  *string                        `json:"FailureReason,omitempty"`
	Metadata       *PipelineExecutionStepMetadata `json:"Metadata,omitempty"`
	StartTime      *time.Time                     `json:"StartTime,omitempty"`
	StepName       *string                        `json:"StepName,omitempty"`
	StepStatus     *StepStatusEnum                `json:"StepStatus,omitempty"`
}
