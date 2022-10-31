package shared

import (
	"time"
)

type UpdateParallelDataResponse struct {
	LatestUpdateAttemptAt     *time.Time              `json:"LatestUpdateAttemptAt,omitempty"`
	LatestUpdateAttemptStatus *ParallelDataStatusEnum `json:"LatestUpdateAttemptStatus,omitempty"`
	Name                      *string                 `json:"Name,omitempty"`
	Status                    *ParallelDataStatusEnum `json:"Status,omitempty"`
}
