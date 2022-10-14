package shared

import (
	"time"
)

type LastUpdate struct {
	CreatedAt *time.Time        `json:"CreatedAt,omitempty"`
	Error     *UpdateError      `json:"Error,omitempty"`
	Status    *UpdateStatusEnum `json:"Status,omitempty"`
}
