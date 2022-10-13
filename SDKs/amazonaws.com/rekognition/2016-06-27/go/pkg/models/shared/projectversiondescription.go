package shared

import (
	"time"
)

type ProjectVersionDescription struct {
	BillableTrainingTimeInSeconds *int64                    `json:"BillableTrainingTimeInSeconds"`
	CreationTimestamp             *time.Time                `json:"CreationTimestamp"`
	EvaluationResult              *EvaluationResult         `json:"EvaluationResult"`
	KmsKeyID                      *string                   `json:"KmsKeyId"`
	ManifestSummary               *GroundTruthManifest      `json:"ManifestSummary"`
	MinInferenceUnits             *int64                    `json:"MinInferenceUnits"`
	OutputConfig                  *OutputConfig             `json:"OutputConfig"`
	ProjectVersionArn             *string                   `json:"ProjectVersionArn"`
	Status                        *ProjectVersionStatusEnum `json:"Status"`
	StatusMessage                 *string                   `json:"StatusMessage"`
	TestingDataResult             *TestingDataResult        `json:"TestingDataResult"`
	TrainingDataResult            *TrainingDataResult       `json:"TrainingDataResult"`
	TrainingEndTimestamp          *time.Time                `json:"TrainingEndTimestamp"`
}
