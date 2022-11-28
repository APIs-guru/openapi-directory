package shared

import (
	"time"
)

// SnapshotSchedule
// Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates.
type SnapshotSchedule struct {
	AssociatedClusterCount *int64
	AssociatedClusters     []ClusterAssociatedToSchedule
	NextInvocations        []time.Time
	ScheduleDefinitions    []string
	ScheduleDescription    *string
	ScheduleIdentifier     *string
	Tags                   []Tag
}
