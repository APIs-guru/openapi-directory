package shared

type TableDataInsertAllRequestRows struct {
	InsertID *string                `json:"insertId,omitempty"`
	JSON     map[string]interface{} `json:"json,omitempty"`
}

type TableDataInsertAllRequest struct {
	IgnoreUnknownValues *bool                           `json:"ignoreUnknownValues,omitempty"`
	Kind                *string                         `json:"kind,omitempty"`
	Rows                []TableDataInsertAllRequestRows `json:"rows,omitempty"`
	SkipInvalidRows     *bool                           `json:"skipInvalidRows,omitempty"`
	TemplateSuffix      *string                         `json:"templateSuffix,omitempty"`
}
