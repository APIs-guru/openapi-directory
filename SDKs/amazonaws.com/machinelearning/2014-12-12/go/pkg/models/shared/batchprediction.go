package shared

import (
	"time"
)

// BatchPrediction
// <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>
type BatchPrediction struct {
	BatchPredictionDataSourceID *string           `json:"BatchPredictionDataSourceId,omitempty"`
	BatchPredictionID           *string           `json:"BatchPredictionId,omitempty"`
	ComputeTime                 *int64            `json:"ComputeTime,omitempty"`
	CreatedAt                   *time.Time        `json:"CreatedAt,omitempty"`
	CreatedByIamUser            *string           `json:"CreatedByIamUser,omitempty"`
	FinishedAt                  *time.Time        `json:"FinishedAt,omitempty"`
	InputDataLocationS3         *string           `json:"InputDataLocationS3,omitempty"`
	InvalidRecordCount          *int64            `json:"InvalidRecordCount,omitempty"`
	LastUpdatedAt               *time.Time        `json:"LastUpdatedAt,omitempty"`
	MlModelID                   *string           `json:"MLModelId,omitempty"`
	Message                     *string           `json:"Message,omitempty"`
	Name                        *string           `json:"Name,omitempty"`
	OutputURI                   *string           `json:"OutputUri,omitempty"`
	StartedAt                   *time.Time        `json:"StartedAt,omitempty"`
	Status                      *EntityStatusEnum `json:"Status,omitempty"`
	TotalRecordCount            *int64            `json:"TotalRecordCount,omitempty"`
}
