package shared

import (
	"time"
)

// SdsServerTime
// DRACOON server time
type SdsServerTime struct {
	Time *time.Time `json:"time,omitempty"`
}
