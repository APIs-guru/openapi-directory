package shared

import (
	"time"
)

type DescribeModelResponse struct {
	CreatedAt                      *time.Time                      `json:"CreatedAt,omitempty"`
	DataPreProcessingConfiguration *DataPreProcessingConfiguration `json:"DataPreProcessingConfiguration,omitempty"`
	DatasetArn                     *string                         `json:"DatasetArn,omitempty"`
	DatasetName                    *string                         `json:"DatasetName,omitempty"`
	EvaluationDataEndTime          *time.Time                      `json:"EvaluationDataEndTime,omitempty"`
	EvaluationDataStartTime        *time.Time                      `json:"EvaluationDataStartTime,omitempty"`
	FailedReason                   *string                         `json:"FailedReason,omitempty"`
	LabelsInputConfiguration       *LabelsInputConfiguration       `json:"LabelsInputConfiguration,omitempty"`
	LastUpdatedTime                *time.Time                      `json:"LastUpdatedTime,omitempty"`
	ModelArn                       *string                         `json:"ModelArn,omitempty"`
	ModelMetrics                   *string                         `json:"ModelMetrics,omitempty"`
	ModelName                      *string                         `json:"ModelName,omitempty"`
	OffCondition                   *string                         `json:"OffCondition,omitempty"`
	RoleArn                        *string                         `json:"RoleArn,omitempty"`
	Schema                         *string                         `json:"Schema,omitempty"`
	ServerSideKmsKeyID             *string                         `json:"ServerSideKmsKeyId,omitempty"`
	Status                         *ModelStatusEnum                `json:"Status,omitempty"`
	TrainingDataEndTime            *time.Time                      `json:"TrainingDataEndTime,omitempty"`
	TrainingDataStartTime          *time.Time                      `json:"TrainingDataStartTime,omitempty"`
	TrainingExecutionEndTime       *time.Time                      `json:"TrainingExecutionEndTime,omitempty"`
	TrainingExecutionStartTime     *time.Time                      `json:"TrainingExecutionStartTime,omitempty"`
}
