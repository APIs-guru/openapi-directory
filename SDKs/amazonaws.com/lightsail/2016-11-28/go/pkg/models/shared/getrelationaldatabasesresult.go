package shared

type GetRelationalDatabasesResult struct {
	NextPageToken       *string              `json:"nextPageToken"`
	RelationalDatabases []RelationalDatabase `json:"relationalDatabases"`
}
