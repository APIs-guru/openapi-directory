package shared

import (
	"time"
)

// PendingMaintenanceAction
// Describes a pending database maintenance action.
type PendingMaintenanceAction struct {
	Action           *string    `json:"action,omitempty"`
	CurrentApplyDate *time.Time `json:"currentApplyDate,omitempty"`
	Description      *string    `json:"description,omitempty"`
}
