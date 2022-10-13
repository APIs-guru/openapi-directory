package shared

import (
	"time"
)

type ScheduleKeyDeletionResponse struct {
	DeletionDate        *time.Time    `json:"DeletionDate"`
	KeyID               *string       `json:"KeyId"`
	KeyState            *KeyStateEnum `json:"KeyState"`
	PendingWindowInDays *int64        `json:"PendingWindowInDays"`
}
