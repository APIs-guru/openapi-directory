package shared

import (
	"time"
)

// SuppressedDestination
// An object that contains information about an email address that is on the suppression list for your account.
type SuppressedDestination struct {
	Attributes     *SuppressedDestinationAttributes `json:"Attributes,omitempty"`
	EmailAddress   string                           `json:"EmailAddress"`
	LastUpdateTime time.Time                        `json:"LastUpdateTime"`
	Reason         SuppressionListReasonEnum        `json:"Reason"`
}
