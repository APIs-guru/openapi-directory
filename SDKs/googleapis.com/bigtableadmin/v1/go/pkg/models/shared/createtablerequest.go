package shared

type CreateTableRequest struct {
	InitialSplits []Split `json:"initialSplits"`
	Table         *Table  `json:"table"`
	TableID       *string `json:"tableId"`
}
