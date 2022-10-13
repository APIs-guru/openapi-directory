package shared

import (
	"time"
)

type MlModel struct {
	Algorithm                   *AlgorithmEnum        `json:"Algorithm"`
	ComputeTime                 *int64                `json:"ComputeTime"`
	CreatedAt                   *time.Time            `json:"CreatedAt"`
	CreatedByIamUser            *string               `json:"CreatedByIamUser"`
	EndpointInfo                *RealtimeEndpointInfo `json:"EndpointInfo"`
	FinishedAt                  *time.Time            `json:"FinishedAt"`
	InputDataLocationS3         *string               `json:"InputDataLocationS3"`
	LastUpdatedAt               *time.Time            `json:"LastUpdatedAt"`
	MlModelID                   *string               `json:"MLModelId"`
	MlModelType                 *MlModelTypeEnum      `json:"MLModelType"`
	Message                     *string               `json:"Message"`
	Name                        *string               `json:"Name"`
	ScoreThreshold              *float32              `json:"ScoreThreshold"`
	ScoreThresholdLastUpdatedAt *time.Time            `json:"ScoreThresholdLastUpdatedAt"`
	SizeInBytes                 *int64                `json:"SizeInBytes"`
	StartedAt                   *time.Time            `json:"StartedAt"`
	Status                      *EntityStatusEnum     `json:"Status"`
	TrainingDataSourceID        *string               `json:"TrainingDataSourceId"`
	TrainingParameters          map[string]string     `json:"TrainingParameters"`
}
