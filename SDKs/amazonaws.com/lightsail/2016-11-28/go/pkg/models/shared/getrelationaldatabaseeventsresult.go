package shared

type GetRelationalDatabaseEventsResult struct {
	NextPageToken            *string                   `json:"nextPageToken"`
	RelationalDatabaseEvents []RelationalDatabaseEvent `json:"relationalDatabaseEvents"`
}
