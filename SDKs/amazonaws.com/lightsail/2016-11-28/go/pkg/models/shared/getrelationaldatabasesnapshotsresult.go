package shared

type GetRelationalDatabaseSnapshotsResult struct {
	NextPageToken               *string                      `json:"nextPageToken"`
	RelationalDatabaseSnapshots []RelationalDatabaseSnapshot `json:"relationalDatabaseSnapshots"`
}
