package shared



type QueryStatistics struct {
    BytesScanned *float64 `json:"bytesScanned,omitempty"`
    RecordsMatched *float64 `json:"recordsMatched,omitempty"`
    RecordsScanned *float64 `json:"recordsScanned,omitempty"`
    
}

