package shared

import (
	"time"
)

type PendingMaintenanceAction struct {
	Action           *string    `json:"action"`
	CurrentApplyDate *time.Time `json:"currentApplyDate"`
	Description      *string    `json:"description"`
}
