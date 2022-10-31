package shared

import (
	"time"
)

type DescribeProcessingJobResponse struct {
	AppSpecification       AppSpecification             `json:"AppSpecification"`
	AutoMlJobArn           *string                      `json:"AutoMLJobArn,omitempty"`
	CreationTime           time.Time                    `json:"CreationTime"`
	Environment            map[string]string            `json:"Environment,omitempty"`
	ExitMessage            *string                      `json:"ExitMessage,omitempty"`
	ExperimentConfig       *ExperimentConfig            `json:"ExperimentConfig,omitempty"`
	FailureReason          *string                      `json:"FailureReason,omitempty"`
	LastModifiedTime       *time.Time                   `json:"LastModifiedTime,omitempty"`
	MonitoringScheduleArn  *string                      `json:"MonitoringScheduleArn,omitempty"`
	NetworkConfig          *NetworkConfig               `json:"NetworkConfig,omitempty"`
	ProcessingEndTime      *time.Time                   `json:"ProcessingEndTime,omitempty"`
	ProcessingInputs       []ProcessingInput            `json:"ProcessingInputs,omitempty"`
	ProcessingJobArn       string                       `json:"ProcessingJobArn"`
	ProcessingJobName      string                       `json:"ProcessingJobName"`
	ProcessingJobStatus    ProcessingJobStatusEnum      `json:"ProcessingJobStatus"`
	ProcessingOutputConfig *ProcessingOutputConfig      `json:"ProcessingOutputConfig,omitempty"`
	ProcessingResources    ProcessingResources          `json:"ProcessingResources"`
	ProcessingStartTime    *time.Time                   `json:"ProcessingStartTime,omitempty"`
	RoleArn                *string                      `json:"RoleArn,omitempty"`
	StoppingCondition      *ProcessingStoppingCondition `json:"StoppingCondition,omitempty"`
	TrainingJobArn         *string                      `json:"TrainingJobArn,omitempty"`
}
