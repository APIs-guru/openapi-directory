package shared

import (
	"time"
)

type CompletionEstimation struct {
	Estimate *time.Time `json:"estimate,omitempty"`
}
