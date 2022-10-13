package shared

type GetRelationalDatabaseParametersRequest struct {
	PageToken              *string `json:"pageToken"`
	RelationalDatabaseName string  `json:"relationalDatabaseName"`
}
