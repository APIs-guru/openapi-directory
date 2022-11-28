package shared

import (
	"time"
)

// WorkerConfigurationRevisionSummary
// The summary of a worker configuration revision.
type WorkerConfigurationRevisionSummary struct {
	CreationTime *time.Time `json:"creationTime,omitempty"`
	Description  *string    `json:"description,omitempty"`
	Revision     *int64     `json:"revision,omitempty"`
}
