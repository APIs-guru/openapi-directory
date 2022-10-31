package shared

import (
	"time"
)

type CreateRelationalDatabaseFromSnapshotRequest struct {
	AvailabilityZone               *string    `json:"availabilityZone,omitempty"`
	PubliclyAccessible             *bool      `json:"publiclyAccessible,omitempty"`
	RelationalDatabaseBundleID     *string    `json:"relationalDatabaseBundleId,omitempty"`
	RelationalDatabaseName         string     `json:"relationalDatabaseName"`
	RelationalDatabaseSnapshotName *string    `json:"relationalDatabaseSnapshotName,omitempty"`
	RestoreTime                    *time.Time `json:"restoreTime,omitempty"`
	SourceRelationalDatabaseName   *string    `json:"sourceRelationalDatabaseName,omitempty"`
	Tags                           []Tag      `json:"tags,omitempty"`
	UseLatestRestorableTime        *bool      `json:"useLatestRestorableTime,omitempty"`
}
