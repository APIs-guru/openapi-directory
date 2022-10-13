package shared

import (
	"time"
)

type PipelineExecutionStep struct {
	CacheHitResult *CacheHitResult                `json:"CacheHitResult"`
	EndTime        *time.Time                     `json:"EndTime"`
	FailureReason  *string                        `json:"FailureReason"`
	Metadata       *PipelineExecutionStepMetadata `json:"Metadata"`
	StartTime      *time.Time                     `json:"StartTime"`
	StepName       *string                        `json:"StepName"`
	StepStatus     *StepStatusEnum                `json:"StepStatus"`
}
