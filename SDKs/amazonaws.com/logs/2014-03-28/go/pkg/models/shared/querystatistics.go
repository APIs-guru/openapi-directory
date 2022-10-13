package shared

type QueryStatistics struct {
	BytesScanned   *float64 `json:"bytesScanned"`
	RecordsMatched *float64 `json:"recordsMatched"`
	RecordsScanned *float64 `json:"recordsScanned"`
}
