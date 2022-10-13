package shared

import (
	"time"
)

type WorkerConfigurationRevisionSummary struct {
	CreationTime *time.Time `json:"creationTime"`
	Description  *string    `json:"description"`
	Revision     *int64     `json:"revision"`
}
