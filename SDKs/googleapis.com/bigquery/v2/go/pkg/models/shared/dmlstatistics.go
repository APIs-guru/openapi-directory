package shared

type DmlStatistics struct {
	DeletedRowCount  *string `json:"deletedRowCount"`
	InsertedRowCount *string `json:"insertedRowCount"`
	UpdatedRowCount  *string `json:"updatedRowCount"`
}
