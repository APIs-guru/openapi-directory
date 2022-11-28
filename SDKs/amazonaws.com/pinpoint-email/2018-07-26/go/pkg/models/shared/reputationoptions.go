package shared

import (
	"time"
)

// ReputationOptions
// Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
type ReputationOptions struct {
	LastFreshStart           *time.Time `json:"LastFreshStart,omitempty"`
	ReputationMetricsEnabled *bool      `json:"ReputationMetricsEnabled,omitempty"`
}
