package shared

type UpdateRelationalDatabaseParametersRequest struct {
	Parameters             []RelationalDatabaseParameter `json:"parameters"`
	RelationalDatabaseName string                        `json:"relationalDatabaseName"`
}
