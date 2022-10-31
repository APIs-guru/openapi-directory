package shared

import (
	"time"
)

type WorkerConfigurationRevisionSummary struct {
	CreationTime *time.Time `json:"creationTime,omitempty"`
	Description  *string    `json:"description,omitempty"`
	Revision     *int64     `json:"revision,omitempty"`
}
