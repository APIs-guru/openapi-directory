package shared

import (
	"time"
)

type HyperParameterTrainingJobSummary struct {
	CreationTime                                time.Time                                    `json:"CreationTime"`
	FailureReason                               *string                                      `json:"FailureReason"`
	FinalHyperParameterTuningJobObjectiveMetric *FinalHyperParameterTuningJobObjectiveMetric `json:"FinalHyperParameterTuningJobObjectiveMetric"`
	ObjectiveStatus                             *ObjectiveStatusEnum                         `json:"ObjectiveStatus"`
	TrainingEndTime                             *time.Time                                   `json:"TrainingEndTime"`
	TrainingJobArn                              string                                       `json:"TrainingJobArn"`
	TrainingJobDefinitionName                   *string                                      `json:"TrainingJobDefinitionName"`
	TrainingJobName                             string                                       `json:"TrainingJobName"`
	TrainingJobStatus                           TrainingJobStatusEnum                        `json:"TrainingJobStatus"`
	TrainingStartTime                           *time.Time                                   `json:"TrainingStartTime"`
	TunedHyperParameters                        map[string]string                            `json:"TunedHyperParameters"`
	TuningJobName                               *string                                      `json:"TuningJobName"`
}
