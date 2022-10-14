package shared

type TableDataInsertAllResponseInsertErrors struct {
	Errors []ErrorProto `json:"errors,omitempty"`
	Index  *int64       `json:"index,omitempty"`
}

type TableDataInsertAllResponse struct {
	InsertErrors []TableDataInsertAllResponseInsertErrors `json:"insertErrors,omitempty"`
	Kind         *string                                  `json:"kind,omitempty"`
}
