package shared

import (
"time")

type HyperParameterTrainingJobSummary struct {
    CreationTime time.Time `json:"CreationTime"`
    FailureReason *string `json:"FailureReason,omitempty"`
    FinalHyperParameterTuningJobObjectiveMetric *FinalHyperParameterTuningJobObjectiveMetric `json:"FinalHyperParameterTuningJobObjectiveMetric,omitempty"`
    ObjectiveStatus *ObjectiveStatusEnum `json:"ObjectiveStatus,omitempty"`
    TrainingEndTime *time.Time `json:"TrainingEndTime,omitempty"`
    TrainingJobArn string `json:"TrainingJobArn"`
    TrainingJobDefinitionName *string `json:"TrainingJobDefinitionName,omitempty"`
    TrainingJobName string `json:"TrainingJobName"`
    TrainingJobStatus TrainingJobStatusEnum `json:"TrainingJobStatus"`
    TrainingStartTime *time.Time `json:"TrainingStartTime,omitempty"`
    TunedHyperParameters map[string]string `json:"TunedHyperParameters"`
    TuningJobName *string `json:"TuningJobName,omitempty"`
    
}

