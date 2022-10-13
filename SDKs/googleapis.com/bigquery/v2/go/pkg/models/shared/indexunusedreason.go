package shared

type IndexUnusedReason struct {
	BaseTable *TableReference `json:"base_table"`
	Code      *string         `json:"code"`
	IndexName *string         `json:"index_name"`
	Message   *string         `json:"message"`
}
