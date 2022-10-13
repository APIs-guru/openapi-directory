package shared

import (
	"time"
)

type ReputationOptions struct {
	LastFreshStart           *time.Time `json:"LastFreshStart"`
	ReputationMetricsEnabled *bool      `json:"ReputationMetricsEnabled"`
}
