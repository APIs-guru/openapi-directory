package shared

import (
	"time"
)

type PendingMaintenanceAction struct {
	Action           *string    `json:"action,omitempty"`
	CurrentApplyDate *time.Time `json:"currentApplyDate,omitempty"`
	Description      *string    `json:"description,omitempty"`
}
