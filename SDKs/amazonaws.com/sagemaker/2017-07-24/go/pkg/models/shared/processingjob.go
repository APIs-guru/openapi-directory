package shared

import (
"time")

type ProcessingJob struct {
    AppSpecification *AppSpecification `json:"AppSpecification,omitempty"`
    AutoMlJobArn *string `json:"AutoMLJobArn,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Environment map[string]string `json:"Environment,omitempty"`
    ExitMessage *string `json:"ExitMessage,omitempty"`
    ExperimentConfig *ExperimentConfig `json:"ExperimentConfig,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    MonitoringScheduleArn *string `json:"MonitoringScheduleArn,omitempty"`
    NetworkConfig *NetworkConfig `json:"NetworkConfig,omitempty"`
    ProcessingEndTime *time.Time `json:"ProcessingEndTime,omitempty"`
    ProcessingInputs []ProcessingInput `json:"ProcessingInputs,omitempty"`
    ProcessingJobArn *string `json:"ProcessingJobArn,omitempty"`
    ProcessingJobName *string `json:"ProcessingJobName,omitempty"`
    ProcessingJobStatus *ProcessingJobStatusEnum `json:"ProcessingJobStatus,omitempty"`
    ProcessingOutputConfig *ProcessingOutputConfig `json:"ProcessingOutputConfig,omitempty"`
    ProcessingResources *ProcessingResources `json:"ProcessingResources,omitempty"`
    ProcessingStartTime *time.Time `json:"ProcessingStartTime,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    StoppingCondition *ProcessingStoppingCondition `json:"StoppingCondition,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    TrainingJobArn *string `json:"TrainingJobArn,omitempty"`
    
}

