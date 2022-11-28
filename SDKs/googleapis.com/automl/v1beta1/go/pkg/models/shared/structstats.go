package shared

// StructStats
// The data statistics of a series of STRUCT values.
type StructStats struct {
	FieldStats map[string]DataStats `json:"fieldStats,omitempty"`
}
