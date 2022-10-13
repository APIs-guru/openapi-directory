package shared

type GetQueryResultsResponse struct {
	CacheHit            *bool         `json:"cacheHit"`
	Errors              []ErrorProto  `json:"errors"`
	Etag                *string       `json:"etag"`
	JobComplete         *bool         `json:"jobComplete"`
	JobReference        *JobReference `json:"jobReference"`
	Kind                *string       `json:"kind"`
	NumDmlAffectedRows  *string       `json:"numDmlAffectedRows"`
	PageToken           *string       `json:"pageToken"`
	Rows                []TableRow    `json:"rows"`
	Schema              *TableSchema  `json:"schema"`
	TotalBytesProcessed *string       `json:"totalBytesProcessed"`
	TotalRows           *string       `json:"totalRows"`
}
