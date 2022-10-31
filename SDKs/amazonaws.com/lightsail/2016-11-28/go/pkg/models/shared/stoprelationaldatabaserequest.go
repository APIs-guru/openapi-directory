package shared



type StopRelationalDatabaseRequest struct {
    RelationalDatabaseName string `json:"relationalDatabaseName"`
    RelationalDatabaseSnapshotName *string `json:"relationalDatabaseSnapshotName,omitempty"`
    
}

