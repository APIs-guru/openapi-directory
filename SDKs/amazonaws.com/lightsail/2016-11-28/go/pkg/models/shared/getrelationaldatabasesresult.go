package shared



type GetRelationalDatabasesResult struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RelationalDatabases []RelationalDatabase `json:"relationalDatabases,omitempty"`
    
}

