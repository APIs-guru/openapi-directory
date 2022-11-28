package shared

import (
	"time"
)

// DashboardEntry
// Represents a specific dashboard.
type DashboardEntry struct {
	DashboardArn  *string
	DashboardName *string
	LastModified  *time.Time
	Size          *int64
}
