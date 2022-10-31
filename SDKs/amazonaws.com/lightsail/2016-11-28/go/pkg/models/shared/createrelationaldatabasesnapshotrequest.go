package shared



type CreateRelationalDatabaseSnapshotRequest struct {
    RelationalDatabaseName string `json:"relationalDatabaseName"`
    RelationalDatabaseSnapshotName string `json:"relationalDatabaseSnapshotName"`
    Tags []Tag `json:"tags,omitempty"`
    
}

