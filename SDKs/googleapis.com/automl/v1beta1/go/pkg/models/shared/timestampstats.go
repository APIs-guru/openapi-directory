package shared

type TimestampStats struct {
	GranularStats map[string]GranularStats `json:"granularStats,omitempty"`
}
