package shared

import (
	"time"
)

type ProcessingJob struct {
	AppSpecification       *AppSpecification            `json:"AppSpecification"`
	AutoMlJobArn           *string                      `json:"AutoMLJobArn"`
	CreationTime           *time.Time                   `json:"CreationTime"`
	Environment            map[string]string            `json:"Environment"`
	ExitMessage            *string                      `json:"ExitMessage"`
	ExperimentConfig       *ExperimentConfig            `json:"ExperimentConfig"`
	FailureReason          *string                      `json:"FailureReason"`
	LastModifiedTime       *time.Time                   `json:"LastModifiedTime"`
	MonitoringScheduleArn  *string                      `json:"MonitoringScheduleArn"`
	NetworkConfig          *NetworkConfig               `json:"NetworkConfig"`
	ProcessingEndTime      *time.Time                   `json:"ProcessingEndTime"`
	ProcessingInputs       []ProcessingInput            `json:"ProcessingInputs"`
	ProcessingJobArn       *string                      `json:"ProcessingJobArn"`
	ProcessingJobName      *string                      `json:"ProcessingJobName"`
	ProcessingJobStatus    *ProcessingJobStatusEnum     `json:"ProcessingJobStatus"`
	ProcessingOutputConfig *ProcessingOutputConfig      `json:"ProcessingOutputConfig"`
	ProcessingResources    *ProcessingResources         `json:"ProcessingResources"`
	ProcessingStartTime    *time.Time                   `json:"ProcessingStartTime"`
	RoleArn                *string                      `json:"RoleArn"`
	StoppingCondition      *ProcessingStoppingCondition `json:"StoppingCondition"`
	Tags                   []Tag                        `json:"Tags"`
	TrainingJobArn         *string                      `json:"TrainingJobArn"`
}
