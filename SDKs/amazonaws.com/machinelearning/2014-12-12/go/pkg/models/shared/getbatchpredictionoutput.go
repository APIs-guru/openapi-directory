package shared

import (
	"time"
)

// GetBatchPredictionOutput
// Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.
type GetBatchPredictionOutput struct {
	BatchPredictionDataSourceID *string           `json:"BatchPredictionDataSourceId,omitempty"`
	BatchPredictionID           *string           `json:"BatchPredictionId,omitempty"`
	ComputeTime                 *int64            `json:"ComputeTime,omitempty"`
	CreatedAt                   *time.Time        `json:"CreatedAt,omitempty"`
	CreatedByIamUser            *string           `json:"CreatedByIamUser,omitempty"`
	FinishedAt                  *time.Time        `json:"FinishedAt,omitempty"`
	InputDataLocationS3         *string           `json:"InputDataLocationS3,omitempty"`
	InvalidRecordCount          *int64            `json:"InvalidRecordCount,omitempty"`
	LastUpdatedAt               *time.Time        `json:"LastUpdatedAt,omitempty"`
	LogURI                      *string           `json:"LogUri,omitempty"`
	MlModelID                   *string           `json:"MLModelId,omitempty"`
	Message                     *string           `json:"Message,omitempty"`
	Name                        *string           `json:"Name,omitempty"`
	OutputURI                   *string           `json:"OutputUri,omitempty"`
	StartedAt                   *time.Time        `json:"StartedAt,omitempty"`
	Status                      *EntityStatusEnum `json:"Status,omitempty"`
	TotalRecordCount            *int64            `json:"TotalRecordCount,omitempty"`
}
