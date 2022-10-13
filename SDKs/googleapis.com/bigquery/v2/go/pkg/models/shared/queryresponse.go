package shared

type QueryResponse struct {
	CacheHit            *bool          `json:"cacheHit"`
	DmlStats            *DmlStatistics `json:"dmlStats"`
	Errors              []ErrorProto   `json:"errors"`
	JobComplete         *bool          `json:"jobComplete"`
	JobReference        *JobReference  `json:"jobReference"`
	Kind                *string        `json:"kind"`
	NumDmlAffectedRows  *string        `json:"numDmlAffectedRows"`
	PageToken           *string        `json:"pageToken"`
	Rows                []TableRow     `json:"rows"`
	Schema              *TableSchema   `json:"schema"`
	SessionInfo         *SessionInfo   `json:"sessionInfo"`
	TotalBytesProcessed *string        `json:"totalBytesProcessed"`
	TotalRows           *string        `json:"totalRows"`
}
