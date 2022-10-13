package shared

import (
	"time"
)

type DescribeModelResponse struct {
	CreatedAt                      *time.Time                      `json:"CreatedAt"`
	DataPreProcessingConfiguration *DataPreProcessingConfiguration `json:"DataPreProcessingConfiguration"`
	DatasetArn                     *string                         `json:"DatasetArn"`
	DatasetName                    *string                         `json:"DatasetName"`
	EvaluationDataEndTime          *time.Time                      `json:"EvaluationDataEndTime"`
	EvaluationDataStartTime        *time.Time                      `json:"EvaluationDataStartTime"`
	FailedReason                   *string                         `json:"FailedReason"`
	LabelsInputConfiguration       *LabelsInputConfiguration       `json:"LabelsInputConfiguration"`
	LastUpdatedTime                *time.Time                      `json:"LastUpdatedTime"`
	ModelArn                       *string                         `json:"ModelArn"`
	ModelMetrics                   *string                         `json:"ModelMetrics"`
	ModelName                      *string                         `json:"ModelName"`
	OffCondition                   *string                         `json:"OffCondition"`
	RoleArn                        *string                         `json:"RoleArn"`
	Schema                         *string                         `json:"Schema"`
	ServerSideKmsKeyID             *string                         `json:"ServerSideKmsKeyId"`
	Status                         *ModelStatusEnum                `json:"Status"`
	TrainingDataEndTime            *time.Time                      `json:"TrainingDataEndTime"`
	TrainingDataStartTime          *time.Time                      `json:"TrainingDataStartTime"`
	TrainingExecutionEndTime       *time.Time                      `json:"TrainingExecutionEndTime"`
	TrainingExecutionStartTime     *time.Time                      `json:"TrainingExecutionStartTime"`
}
