package shared

import (
	"time"
)

type FailedCreateSimulationJobRequest struct {
	FailedAt      *time.Time                  `json:"failedAt,omitempty"`
	FailureCode   *SimulationJobErrorCodeEnum `json:"failureCode,omitempty"`
	FailureReason *string                     `json:"failureReason,omitempty"`
	Request       *SimulationJobRequest       `json:"request,omitempty"`
}
