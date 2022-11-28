package shared

import (
	"time"
)

// Range
// Specifies one range of days or times to exclude from use for training an anomaly detection model.
type Range struct {
	EndTime   time.Time
	StartTime time.Time
}
