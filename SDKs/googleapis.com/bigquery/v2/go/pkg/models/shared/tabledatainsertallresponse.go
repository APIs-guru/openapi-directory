package shared

type TableDataInsertAllResponseInsertErrors struct {
	Errors []ErrorProto `json:"errors"`
	Index  *int64       `json:"index"`
}

type TableDataInsertAllResponse struct {
	InsertErrors []TableDataInsertAllResponseInsertErrors `json:"insertErrors"`
	Kind         *string                                  `json:"kind"`
}
