package shared

import (
	"time"
)

// DeferredMaintenanceWindow
// Describes a deferred maintenance window
type DeferredMaintenanceWindow struct {
	DeferMaintenanceEndTime    *time.Time
	DeferMaintenanceIdentifier *string
	DeferMaintenanceStartTime  *time.Time
}
