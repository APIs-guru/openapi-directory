package shared

type GetRelationalDatabaseParametersResult struct {
	NextPageToken *string                       `json:"nextPageToken"`
	Parameters    []RelationalDatabaseParameter `json:"parameters"`
}
