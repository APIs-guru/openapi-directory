package shared

import (
	"time"
)

type CreateRelationalDatabaseFromSnapshotRequest struct {
	AvailabilityZone               *string    `json:"availabilityZone"`
	PubliclyAccessible             *bool      `json:"publiclyAccessible"`
	RelationalDatabaseBundleID     *string    `json:"relationalDatabaseBundleId"`
	RelationalDatabaseName         string     `json:"relationalDatabaseName"`
	RelationalDatabaseSnapshotName *string    `json:"relationalDatabaseSnapshotName"`
	RestoreTime                    *time.Time `json:"restoreTime"`
	SourceRelationalDatabaseName   *string    `json:"sourceRelationalDatabaseName"`
	Tags                           []Tag      `json:"tags"`
	UseLatestRestorableTime        *bool      `json:"useLatestRestorableTime"`
}
