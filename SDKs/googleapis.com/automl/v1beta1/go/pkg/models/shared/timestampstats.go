package shared

// TimestampStats
// The data statistics of a series of TIMESTAMP values.
type TimestampStats struct {
	GranularStats map[string]GranularStats `json:"granularStats,omitempty"`
}
