package shared

import (
	"time"
)

// LastUpdate
// The status of the last update on the environment, and any errors that were encountered.
type LastUpdate struct {
	CreatedAt *time.Time        `json:"CreatedAt,omitempty"`
	Error     *UpdateError      `json:"Error,omitempty"`
	Status    *UpdateStatusEnum `json:"Status,omitempty"`
}
