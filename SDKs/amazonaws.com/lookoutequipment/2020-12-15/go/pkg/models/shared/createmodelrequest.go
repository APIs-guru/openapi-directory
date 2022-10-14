package shared

import (
	"time"
)

type CreateModelRequest struct {
	ClientToken                    string                          `json:"ClientToken"`
	DataPreProcessingConfiguration *DataPreProcessingConfiguration `json:"DataPreProcessingConfiguration,omitempty"`
	DatasetName                    string                          `json:"DatasetName"`
	DatasetSchema                  *DatasetSchema                  `json:"DatasetSchema,omitempty"`
	EvaluationDataEndTime          *time.Time                      `json:"EvaluationDataEndTime,omitempty"`
	EvaluationDataStartTime        *time.Time                      `json:"EvaluationDataStartTime,omitempty"`
	LabelsInputConfiguration       *LabelsInputConfiguration       `json:"LabelsInputConfiguration,omitempty"`
	ModelName                      string                          `json:"ModelName"`
	OffCondition                   *string                         `json:"OffCondition,omitempty"`
	RoleArn                        *string                         `json:"RoleArn,omitempty"`
	ServerSideKmsKeyID             *string                         `json:"ServerSideKmsKeyId,omitempty"`
	Tags                           []Tag                           `json:"Tags,omitempty"`
	TrainingDataEndTime            *time.Time                      `json:"TrainingDataEndTime,omitempty"`
	TrainingDataStartTime          *time.Time                      `json:"TrainingDataStartTime,omitempty"`
}
