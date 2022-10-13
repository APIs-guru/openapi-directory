package shared

import (
	"time"
)

type DescribeHyperParameterTuningJobResponse struct {
	BestTrainingJob               *HyperParameterTrainingJobSummary       `json:"BestTrainingJob"`
	CreationTime                  time.Time                               `json:"CreationTime"`
	FailureReason                 *string                                 `json:"FailureReason"`
	HyperParameterTuningEndTime   *time.Time                              `json:"HyperParameterTuningEndTime"`
	HyperParameterTuningJobArn    string                                  `json:"HyperParameterTuningJobArn"`
	HyperParameterTuningJobConfig HyperParameterTuningJobConfig           `json:"HyperParameterTuningJobConfig"`
	HyperParameterTuningJobName   string                                  `json:"HyperParameterTuningJobName"`
	HyperParameterTuningJobStatus HyperParameterTuningJobStatusEnum       `json:"HyperParameterTuningJobStatus"`
	LastModifiedTime              *time.Time                              `json:"LastModifiedTime"`
	ObjectiveStatusCounters       ObjectiveStatusCounters                 `json:"ObjectiveStatusCounters"`
	OverallBestTrainingJob        *HyperParameterTrainingJobSummary       `json:"OverallBestTrainingJob"`
	TrainingJobDefinition         *HyperParameterTrainingJobDefinition    `json:"TrainingJobDefinition"`
	TrainingJobDefinitions        []HyperParameterTrainingJobDefinition   `json:"TrainingJobDefinitions"`
	TrainingJobStatusCounters     TrainingJobStatusCounters               `json:"TrainingJobStatusCounters"`
	WarmStartConfig               *HyperParameterTuningJobWarmStartConfig `json:"WarmStartConfig"`
}
