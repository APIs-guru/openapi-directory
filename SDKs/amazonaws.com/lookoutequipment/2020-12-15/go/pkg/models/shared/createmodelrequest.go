package shared

import (
	"time"
)

type CreateModelRequest struct {
	ClientToken                    string                          `json:"ClientToken"`
	DataPreProcessingConfiguration *DataPreProcessingConfiguration `json:"DataPreProcessingConfiguration"`
	DatasetName                    string                          `json:"DatasetName"`
	DatasetSchema                  *DatasetSchema                  `json:"DatasetSchema"`
	EvaluationDataEndTime          *time.Time                      `json:"EvaluationDataEndTime"`
	EvaluationDataStartTime        *time.Time                      `json:"EvaluationDataStartTime"`
	LabelsInputConfiguration       *LabelsInputConfiguration       `json:"LabelsInputConfiguration"`
	ModelName                      string                          `json:"ModelName"`
	OffCondition                   *string                         `json:"OffCondition"`
	RoleArn                        *string                         `json:"RoleArn"`
	ServerSideKmsKeyID             *string                         `json:"ServerSideKmsKeyId"`
	Tags                           []Tag                           `json:"Tags"`
	TrainingDataEndTime            *time.Time                      `json:"TrainingDataEndTime"`
	TrainingDataStartTime          *time.Time                      `json:"TrainingDataStartTime"`
}
