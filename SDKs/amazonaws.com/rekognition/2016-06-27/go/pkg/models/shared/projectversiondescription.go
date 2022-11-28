package shared

import (
	"time"
)

// ProjectVersionDescription
// The description of a version of a model.
type ProjectVersionDescription struct {
	BillableTrainingTimeInSeconds *int64                    `json:"BillableTrainingTimeInSeconds,omitempty"`
	CreationTimestamp             *time.Time                `json:"CreationTimestamp,omitempty"`
	EvaluationResult              *EvaluationResult         `json:"EvaluationResult,omitempty"`
	KmsKeyID                      *string                   `json:"KmsKeyId,omitempty"`
	ManifestSummary               *GroundTruthManifest      `json:"ManifestSummary,omitempty"`
	MinInferenceUnits             *int64                    `json:"MinInferenceUnits,omitempty"`
	OutputConfig                  *OutputConfig             `json:"OutputConfig,omitempty"`
	ProjectVersionArn             *string                   `json:"ProjectVersionArn,omitempty"`
	Status                        *ProjectVersionStatusEnum `json:"Status,omitempty"`
	StatusMessage                 *string                   `json:"StatusMessage,omitempty"`
	TestingDataResult             *TestingDataResult        `json:"TestingDataResult,omitempty"`
	TrainingDataResult            *TrainingDataResult       `json:"TrainingDataResult,omitempty"`
	TrainingEndTimestamp          *time.Time                `json:"TrainingEndTimestamp,omitempty"`
}
