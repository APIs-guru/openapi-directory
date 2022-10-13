package shared

import (
	"time"
)

type FailedCreateSimulationJobRequest struct {
	FailedAt      *time.Time                  `json:"failedAt"`
	FailureCode   *SimulationJobErrorCodeEnum `json:"failureCode"`
	FailureReason *string                     `json:"failureReason"`
	Request       *SimulationJobRequest       `json:"request"`
}
