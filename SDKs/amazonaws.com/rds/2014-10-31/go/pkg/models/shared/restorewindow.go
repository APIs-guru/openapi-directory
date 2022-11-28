package shared

import (
	"time"
)

// RestoreWindow
// Earliest and latest time an instance can be restored to:
type RestoreWindow struct {
	EarliestTime *time.Time
	LatestTime   *time.Time
}
