package shared

import (
	"time"
)

type GetEvaluationOutput struct {
	ComputeTime            *int64              `json:"ComputeTime"`
	CreatedAt              *time.Time          `json:"CreatedAt"`
	CreatedByIamUser       *string             `json:"CreatedByIamUser"`
	EvaluationDataSourceID *string             `json:"EvaluationDataSourceId"`
	EvaluationID           *string             `json:"EvaluationId"`
	FinishedAt             *time.Time          `json:"FinishedAt"`
	InputDataLocationS3    *string             `json:"InputDataLocationS3"`
	LastUpdatedAt          *time.Time          `json:"LastUpdatedAt"`
	LogURI                 *string             `json:"LogUri"`
	MlModelID              *string             `json:"MLModelId"`
	Message                *string             `json:"Message"`
	Name                   *string             `json:"Name"`
	PerformanceMetrics     *PerformanceMetrics `json:"PerformanceMetrics"`
	StartedAt              *time.Time          `json:"StartedAt"`
	Status                 *EntityStatusEnum   `json:"Status"`
}
