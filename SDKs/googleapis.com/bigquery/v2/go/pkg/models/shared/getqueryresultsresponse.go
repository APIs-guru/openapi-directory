package shared

type GetQueryResultsResponse struct {
	CacheHit            *bool         `json:"cacheHit,omitempty"`
	Errors              []ErrorProto  `json:"errors,omitempty"`
	Etag                *string       `json:"etag,omitempty"`
	JobComplete         *bool         `json:"jobComplete,omitempty"`
	JobReference        *JobReference `json:"jobReference,omitempty"`
	Kind                *string       `json:"kind,omitempty"`
	NumDmlAffectedRows  *string       `json:"numDmlAffectedRows,omitempty"`
	PageToken           *string       `json:"pageToken,omitempty"`
	Rows                []TableRow    `json:"rows,omitempty"`
	Schema              *TableSchema  `json:"schema,omitempty"`
	TotalBytesProcessed *string       `json:"totalBytesProcessed,omitempty"`
	TotalRows           *string       `json:"totalRows,omitempty"`
}
