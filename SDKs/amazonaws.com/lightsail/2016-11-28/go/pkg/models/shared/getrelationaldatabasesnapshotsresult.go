package shared



type GetRelationalDatabaseSnapshotsResult struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RelationalDatabaseSnapshots []RelationalDatabaseSnapshot `json:"relationalDatabaseSnapshots,omitempty"`
    
}

