package shared

type GetRelationalDatabaseEventsResult struct {
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
	RelationalDatabaseEvents []RelationalDatabaseEvent `json:"relationalDatabaseEvents,omitempty"`
}
