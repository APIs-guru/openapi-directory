package shared

import (
	"time"
)

// MlModel
// <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
type MlModel struct {
	Algorithm                   *AlgorithmEnum        `json:"Algorithm,omitempty"`
	ComputeTime                 *int64                `json:"ComputeTime,omitempty"`
	CreatedAt                   *time.Time            `json:"CreatedAt,omitempty"`
	CreatedByIamUser            *string               `json:"CreatedByIamUser,omitempty"`
	EndpointInfo                *RealtimeEndpointInfo `json:"EndpointInfo,omitempty"`
	FinishedAt                  *time.Time            `json:"FinishedAt,omitempty"`
	InputDataLocationS3         *string               `json:"InputDataLocationS3,omitempty"`
	LastUpdatedAt               *time.Time            `json:"LastUpdatedAt,omitempty"`
	MlModelID                   *string               `json:"MLModelId,omitempty"`
	MlModelType                 *MlModelTypeEnum      `json:"MLModelType,omitempty"`
	Message                     *string               `json:"Message,omitempty"`
	Name                        *string               `json:"Name,omitempty"`
	ScoreThreshold              *float32              `json:"ScoreThreshold,omitempty"`
	ScoreThresholdLastUpdatedAt *time.Time            `json:"ScoreThresholdLastUpdatedAt,omitempty"`
	SizeInBytes                 *int64                `json:"SizeInBytes,omitempty"`
	StartedAt                   *time.Time            `json:"StartedAt,omitempty"`
	Status                      *EntityStatusEnum     `json:"Status,omitempty"`
	TrainingDataSourceID        *string               `json:"TrainingDataSourceId,omitempty"`
	TrainingParameters          map[string]string     `json:"TrainingParameters,omitempty"`
}
