package shared

import (
	"time"
)

// PendingMaintenanceAction
// Provides information about a pending maintenance action for a resource.
type PendingMaintenanceAction struct {
	Action               *string
	AutoAppliedAfterDate *time.Time
	CurrentApplyDate     *time.Time
	Description          *string
	ForcedApplyDate      *time.Time
	OptInStatus          *string
}
