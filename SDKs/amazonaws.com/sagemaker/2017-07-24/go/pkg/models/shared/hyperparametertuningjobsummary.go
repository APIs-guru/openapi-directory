package shared

import (
"time")

type HyperParameterTuningJobSummary struct {
    CreationTime time.Time `json:"CreationTime"`
    HyperParameterTuningEndTime *time.Time `json:"HyperParameterTuningEndTime,omitempty"`
    HyperParameterTuningJobArn string `json:"HyperParameterTuningJobArn"`
    HyperParameterTuningJobName string `json:"HyperParameterTuningJobName"`
    HyperParameterTuningJobStatus HyperParameterTuningJobStatusEnum `json:"HyperParameterTuningJobStatus"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    ObjectiveStatusCounters ObjectiveStatusCounters `json:"ObjectiveStatusCounters"`
    ResourceLimits *ResourceLimits `json:"ResourceLimits,omitempty"`
    Strategy HyperParameterTuningJobStrategyTypeEnum `json:"Strategy"`
    TrainingJobStatusCounters TrainingJobStatusCounters `json:"TrainingJobStatusCounters"`
    
}

