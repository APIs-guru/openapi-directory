package shared

import (
	"time"
)

type LastUpdate struct {
	CreatedAt *time.Time        `json:"CreatedAt"`
	Error     *UpdateError      `json:"Error"`
	Status    *UpdateStatusEnum `json:"Status"`
}
