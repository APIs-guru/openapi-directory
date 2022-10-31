package shared

import (
"time")

type DescribeHyperParameterTuningJobResponse struct {
    BestTrainingJob *HyperParameterTrainingJobSummary `json:"BestTrainingJob,omitempty"`
    CreationTime time.Time `json:"CreationTime"`
    FailureReason *string `json:"FailureReason,omitempty"`
    HyperParameterTuningEndTime *time.Time `json:"HyperParameterTuningEndTime,omitempty"`
    HyperParameterTuningJobArn string `json:"HyperParameterTuningJobArn"`
    HyperParameterTuningJobConfig HyperParameterTuningJobConfig `json:"HyperParameterTuningJobConfig"`
    HyperParameterTuningJobName string `json:"HyperParameterTuningJobName"`
    HyperParameterTuningJobStatus HyperParameterTuningJobStatusEnum `json:"HyperParameterTuningJobStatus"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    ObjectiveStatusCounters ObjectiveStatusCounters `json:"ObjectiveStatusCounters"`
    OverallBestTrainingJob *HyperParameterTrainingJobSummary `json:"OverallBestTrainingJob,omitempty"`
    TrainingJobDefinition *HyperParameterTrainingJobDefinition `json:"TrainingJobDefinition,omitempty"`
    TrainingJobDefinitions []HyperParameterTrainingJobDefinition `json:"TrainingJobDefinitions,omitempty"`
    TrainingJobStatusCounters TrainingJobStatusCounters `json:"TrainingJobStatusCounters"`
    WarmStartConfig *HyperParameterTuningJobWarmStartConfig `json:"WarmStartConfig,omitempty"`
    
}

