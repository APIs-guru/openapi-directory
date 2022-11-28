package shared

import (
	"time"
)

// DbClusterBacktrack
// This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
type DbClusterBacktrack struct {
	BacktrackIdentifier          *string
	BacktrackRequestCreationTime *time.Time
	BacktrackTo                  *time.Time
	BacktrackedFrom              *time.Time
	DbClusterIdentifier          *string
	Status                       *string
}
