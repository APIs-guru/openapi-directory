package shared

// QueryStatistics
// Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
type QueryStatistics struct {
	BytesScanned   *float64 `json:"bytesScanned,omitempty"`
	RecordsMatched *float64 `json:"recordsMatched,omitempty"`
	RecordsScanned *float64 `json:"recordsScanned,omitempty"`
}
