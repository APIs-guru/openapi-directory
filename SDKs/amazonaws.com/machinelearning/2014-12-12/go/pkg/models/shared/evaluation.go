package shared

import (
	"time"
)

type Evaluation struct {
	ComputeTime            *int64              `json:"ComputeTime,omitempty"`
	CreatedAt              *time.Time          `json:"CreatedAt,omitempty"`
	CreatedByIamUser       *string             `json:"CreatedByIamUser,omitempty"`
	EvaluationDataSourceID *string             `json:"EvaluationDataSourceId,omitempty"`
	EvaluationID           *string             `json:"EvaluationId,omitempty"`
	FinishedAt             *time.Time          `json:"FinishedAt,omitempty"`
	InputDataLocationS3    *string             `json:"InputDataLocationS3,omitempty"`
	LastUpdatedAt          *time.Time          `json:"LastUpdatedAt,omitempty"`
	MlModelID              *string             `json:"MLModelId,omitempty"`
	Message                *string             `json:"Message,omitempty"`
	Name                   *string             `json:"Name,omitempty"`
	PerformanceMetrics     *PerformanceMetrics `json:"PerformanceMetrics,omitempty"`
	StartedAt              *time.Time          `json:"StartedAt,omitempty"`
	Status                 *EntityStatusEnum   `json:"Status,omitempty"`
}
