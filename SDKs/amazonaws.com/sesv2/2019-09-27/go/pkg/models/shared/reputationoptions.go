package shared

import (
	"time"
)

type ReputationOptions struct {
	LastFreshStart           *time.Time `json:"LastFreshStart,omitempty"`
	ReputationMetricsEnabled *bool      `json:"ReputationMetricsEnabled,omitempty"`
}
