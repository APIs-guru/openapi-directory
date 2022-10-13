package shared

type GetRelationalDatabaseEventsRequest struct {
	DurationInMinutes      *int64  `json:"durationInMinutes"`
	PageToken              *string `json:"pageToken"`
	RelationalDatabaseName string  `json:"relationalDatabaseName"`
}
