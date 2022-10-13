package shared

type DropRowRangeRequest struct {
	DeleteAllDataFromTable *bool   `json:"deleteAllDataFromTable"`
	RowKeyPrefix           *string `json:"rowKeyPrefix"`
}
