package shared

type TableDataInsertAllRequestRows struct {
	InsertID *string                `json:"insertId"`
	JSON     map[string]interface{} `json:"json"`
}

type TableDataInsertAllRequest struct {
	IgnoreUnknownValues *bool                           `json:"ignoreUnknownValues"`
	Kind                *string                         `json:"kind"`
	Rows                []TableDataInsertAllRequestRows `json:"rows"`
	SkipInvalidRows     *bool                           `json:"skipInvalidRows"`
	TemplateSuffix      *string                         `json:"templateSuffix"`
}
