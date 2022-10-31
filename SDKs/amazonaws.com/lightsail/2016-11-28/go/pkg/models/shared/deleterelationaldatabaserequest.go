package shared

type DeleteRelationalDatabaseRequest struct {
	FinalRelationalDatabaseSnapshotName *string `json:"finalRelationalDatabaseSnapshotName,omitempty"`
	RelationalDatabaseName              string  `json:"relationalDatabaseName"`
	SkipFinalSnapshot                   *bool   `json:"skipFinalSnapshot,omitempty"`
}
