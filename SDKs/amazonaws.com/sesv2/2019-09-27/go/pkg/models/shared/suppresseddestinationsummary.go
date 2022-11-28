package shared

import (
	"time"
)

// SuppressedDestinationSummary
// A summary that describes the suppressed email address.
type SuppressedDestinationSummary struct {
	EmailAddress   string                    `json:"EmailAddress"`
	LastUpdateTime time.Time                 `json:"LastUpdateTime"`
	Reason         SuppressionListReasonEnum `json:"Reason"`
}
